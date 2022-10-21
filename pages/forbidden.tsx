import { NextPage } from 'next';
import { Container } from '@components/Container';
import BottomCTA from '@components/BottomCTA';
import { useRouter } from 'next/router';
import Text from '@components/Text';

const Forbidden: NextPage = () => {
  const router = useRouter();

  return (
    <Container>
      <Text typographyType={'t1'} fontWeight={700}>
        잘못된 접근입니다.
      </Text>
      <BottomCTA onClick={() => router.push('/')}>확인</BottomCTA>
    </Container>
  );
};

export default Forbidden;
