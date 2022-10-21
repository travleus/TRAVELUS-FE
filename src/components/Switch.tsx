import styled from '@emotion/styled';
import colors from '@constants/colors';
import { Dispatch, SetStateAction } from 'react';

interface Props {
  toggle: boolean;
  setToggle: Dispatch<SetStateAction<boolean>>;
}

function Switch({ toggle, setToggle }: Props) {
  return (
    <Wrapper>
      <SwitchBox type="checkbox" id="switch" checked={toggle} onChange={() => setToggle(!toggle)} />
      <SwitchLabel htmlFor="switch">
        <OnOffButton />
      </SwitchLabel>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const SwitchLabel = styled.label`
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 40px;
  height: 20px;
  background: #fff;
  border: 2px solid ${colors.primary2};
  border-radius: 20px;
  transition: 0.2s;

  &:hover {
    background: #efefef;
  }
`;

const OnOffButton = styled.span`
  position: absolute;
  top: 3px;
  left: 3px;
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 20px;
  background: ${colors.primary2};
  transition: 0.2s;
`;

const SwitchBox = styled.input`
  position: absolute;
  appearance: none;

  &:checked + ${SwitchLabel} {
    background: ${colors.primary2};
    border: 2px solid ${colors.primary2};
  }

  &:checked + ${SwitchLabel}:hover {
    background: ${colors.primary1};
  }

  &:checked + ${SwitchLabel} ${OnOffButton} {
    left: 22px;
    background: #fff;
    box-shadow: 1px 2px 3px #00000020;
  }
`;

export default Switch;
