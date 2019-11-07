interface UV {
  County: string;
  PublishAgency: string;
  PublishTime: string;
  SiteName: string;
  UVI: string;
  WGS84Lat: string;
  WGS84Lon: string;
}

export class UVModel {
  private raw: UV;

  county: string;
  siteName: string;

  constructor(data: UV) {
    this.raw = data;
    this.county = data.County;
    this.siteName = data.SiteName;
  }
}
