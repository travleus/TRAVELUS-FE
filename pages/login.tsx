import { NextPage } from 'next';
import AppLogo from '@components/AppLogo';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { checkMember, getMember, Member, registerMember, RegisterMember } from '@apis/member';
import colors from '@constants/colors';
import Script from 'next/script';

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
      {loading && (
        <LoadingBox>
          <Loading />
        </LoadingBox>
      )}
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

const LoadingBox = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const Loading = styled.span`
  position: fixed;
  top: 50%;
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 3px solid ${colors.primary2};
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default Login;