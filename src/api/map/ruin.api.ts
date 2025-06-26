import customAxios from "@src/libs/axios/customAxios";
import { BaseResponse } from "@src/types/globalType/global.type";
import { LatLng } from "@src/types/map/latLng.type";
import { Ruin, RuinDetail } from "@src/types/map/ruin.type";

class RuinApi {
  public async getRuins(
    minLat: number,
    minLng: number,
    maxLat: number,
    maxLng: number
  ): Promise<Ruin[]> {
    const { data } = await customAxios.get("/ruins/map", {
      params: {
        minLat: minLat,
        minLng: minLng,
        maxLat: maxLat,
        maxLng: maxLng,
      },
    });
    return data.data;
  }

  public async getRuinDetail(id: number): Promise<RuinDetail | undefined> {
    if (id) {
      const { data } = await customAxios.get(`/ruins/${id}`);
      console.log(data);
      return data;
    }

    return undefined;
  }
}

export default new RuinApi();
