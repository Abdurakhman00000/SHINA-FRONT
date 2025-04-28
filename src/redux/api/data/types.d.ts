export namespace DATA_TYPES {
  export type GetDatasResponse = Product;
  export type GetDatasRequest =Params;

  export type GetDataByIdResponse = Tyres;
  export type GetDataByIdRequest = number;

  export type GetSimilarTyresRequest = number; 
  export type GetSimilarTyresResponse = Tyre[]; 
}
