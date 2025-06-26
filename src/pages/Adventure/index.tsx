import * as S from "./style";
import GoogleMap from "@components/map/GoogleMap";
import Sidebar from "@components/common/Sidebar";
import TileInfo from "@components/map/TileInfo";

const Adventure = () => {
  return (
    <S.BackStage>
      <S.GoogleMapWrapper>
        <GoogleMap />
      </S.GoogleMapWrapper>

      <S.Container>
        <Sidebar />
      </S.Container>

      <S.InfoPopup>
        <TileInfo
          type="legacy"
          location="서울"
          requireCredit="1000"
          exploreStack="5"
        />
      </S.InfoPopup>
    </S.BackStage>
  );
};

export default Adventure;
