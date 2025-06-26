export interface Ruin {
  ruinsId: number;
  latitude: number;
  longitude: number;
}

export interface RuinDetail {
  ruinsId: number;
  ruinsImage: string;
  category: string;
  name: string;
  chineseName: string;
  englishName: string;
  location: string;
  detailAddress: string;
  periodName: string;
  specifiedDate: string;
  owner: string;
  manager: string;
  latitude: number;
  longitude: number;
}
