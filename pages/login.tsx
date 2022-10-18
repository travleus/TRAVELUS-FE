import { NextPage } from 'next';
import AppLogo from '@components/AppLogo';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { checkMember, getMember, Member, registerMember, RegisterMember } from '@apis/member';
import Script from 'next/script';
import Loading from '@components/Loading';

interface login {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
  token_type: string;
}

interface kakaoInfo {
  connected_at: string;
  id: string;
  kakao_account: {
    email: string;
    email_needs_agreement: boolean;
    has_email: boolean;
    is_email_valid: boolean;
    is_email_verified: boolean;
  };
}

const Login: NextPage = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const onLoginSuccess = (member: Member) => {
    window.localStorage.setItem('kakao', member.kakao);
    queryClient.setQueryData(['user'], member);
    router.push('/');
  };

  const handleClickKaKaoLogin = () => {
    const kakao = (window as any).Kakao;
    if (!kakao.isInitialized()) {
      kakao.init(process.env.NEXT_PUBLIC_KAKAO_KEY);

      kakao.Auth.login({
        scope: 'account_email',
        success: function (response: login) {
          kakao.Auth.setAccessToken(response.access_token);
          kakao.API.request({
            url: '/v2/user/me',
            data: {
              property_keys: ['kakao_account.email'],
            },
            success: async function (response: kakaoInfo) {
              setLoading(true);
              const email = response.kakao_account.email;
              try {
                const member = await checkMember(email);
                onLoginSuccess(member);
              } catch (e) {
                const regMember: RegisterMember = {
                  kakao: email,
                };
                try {
                  const id = await registerMember(regMember);
                  const member = await getMember(id);
                  onLoginSuccess(member);
                } catch (e) {
                  console.log(e);
                }
              }
            },
            fail: function () {
              alert('카카오 로그인 에러 발생');
            },
          });
        },
        fail: function () {
          alert('카카오 로그인 에러 발생');
        },
      });
    }
  };

  useEffect(() => {
    if (window.localStorage.getItem('kakao')) {
      router.push('/');
    }
  }, [router]);

  return (
    <Container>
      <Script src={'https://developers.kakao.com/sdk/js/kakao.js'} strategy={'beforeInteractive'} />

      <AppLogo />
      <KaKaoImage onClick={handleClickKaKaoLogin} src={'icons/kakao_login_large_narrow.png'} />
      {loading && <Loading />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const KaKaoImage = styled.img`
  width: 180px;
  cursor: pointer;
  margin-top: 30px;
`;

export default Login;
