import LegacyButton from "@components/common/LegacyButton";
import * as S from "./style";
import { LegacyPalette, LegacySementic } from "@src/constants/color/color";
import useMapPixel from "@src/hooks/map/useMapPixel";

interface TileInfoTypeProps {
  type: "legacy" | "default";
  location: string;
  requireCredit: string;
  exploreStack: string;
}

const TileInfo = ({
  type,
  location,
  requireCredit,
  exploreStack,
}: TileInfoTypeProps) => {
  const { ruinDetail } = useMapPixel();

  return (
    <S.InfoContainer>
      <S.HeadlineBold>블록 탐험</S.HeadlineBold>
      <S.Column8>
        <S.LabelMedieum>선택한 블록</S.LabelMedieum>
        <S.Row4>
          <S.LocationText>{location}</S.LocationText>
          <S.BlockTypeText $blockType={type}>
            {type === "default" ? "일반" : "유적지"}
          </S.BlockTypeText>
        </S.Row4>
      </S.Column8>
      <S.Column8>
        <S.LabelMedieum>탐험 필요 크레딧</S.LabelMedieum>
        <S.Row4>
          <S.CreditText>
            {requireCredit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </S.CreditText>
          <S.CreditAddText>( 오늘 누적 {exploreStack}블록 )</S.CreditAddText>
        </S.Row4>
      </S.Column8>
      <LegacyButton
        size="default"
        isBold={false}
        isFilled={false}
        color={LegacySementic.blue.netural}
        width="100%"
        children={
          <S.ExploreButtonChildren>블록 탐험하기</S.ExploreButtonChildren>
        }
      />
    </S.InfoContainer>
  );
};

export default TileInfo;
