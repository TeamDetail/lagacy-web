import * as S from "./style";

interface ButtonTypeProps {
  size: "default" | "small" | "big";
  isBold: boolean;
  isFilled: boolean;
  color: string;
  handleClick?: () => void;
  children: React.ReactNode;
  isAtv?: boolean;
  width?: string;
}

const LegacyButton = ({
  size,
  isBold,
  isFilled,
  color,
  handleClick,
  children,
  isAtv,
  width = "173px",
}: ButtonTypeProps) => {
  return (
    <S.ButtonHover>
      <S.ButtonWrapper
        onClick={handleClick}
        $isAtv={isAtv}
        $color={color}
        $width={width}
      >
        <S.ButtonContainer
          $size={size}
          $color={color}
          $isBold={isBold}
          $isFilled={isFilled}
        >
          {children}
        </S.ButtonContainer>
      </S.ButtonWrapper>
    </S.ButtonHover>
  );
};

export default LegacyButton;
