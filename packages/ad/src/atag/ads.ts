import { generateCustomPlaceholderURL } from "react-placeholder-image";

const generateLogoUrl = (text: string) =>
  generateCustomPlaceholderURL(240, 150, {
    backgroundColor: "#2e3456",
    textColor: "#ffffff",
    text
  });

export interface PointBackInfo {
  endDate: string;
  logoUrl: string;
  name: string;
  pointRate: string;
  pointUp: boolean;
  startDate: string;
}

export interface Ad {
  pointBackInfo: PointBackInfo;
  name: string;
  price: number;
  url: string;
}

const ads: Ad[] = [
  {
    name: "商品1",
    price: 11111,
    url: "https://www.ca-wise.co.jp/",
    pointBackInfo: {
      endDate: "2019-11-30T23:59:00.000+09:00",
      logoUrl: generateLogoUrl("LOGO 1"),
      name: "商品1",
      pointRate: "5.0",
      pointUp: true,
      startDate: "2019-10-28T00:00:00.000+09:00"
    }
  },
  {
    name: "商品2",
    price: 22222,
    url: "https://www.ca-wise.co.jp/",
    pointBackInfo: {
      endDate: "2019-12-31T23:59:00.000+09:00",
      logoUrl: generateLogoUrl("LOGO 2"),
      name: "商品2",
      pointRate: "5.0",
      pointUp: true,
      startDate: "2019-10-18T00:00:00.000+09:00"
    }
  },
  {
    name: "商品3",
    price: 33333,
    url: "https://www.ca-wise.co.jp/",
    pointBackInfo: {
      endDate: "2020-03-31T23:59:00.000+09:00",
      logoUrl: generateLogoUrl("LOGO 3"),
      name: "商品3",
      pointRate: "1.0",
      pointUp: false,
      startDate: "2019-11-01T00:00:00.000+09:00"
    }
  },
  {
    name: "商品4",
    price: 44444,
    url: "https://www.ca-wise.co.jp/",
    pointBackInfo: {
      endDate: "2019-12-31T23:59:00.000+09:00",
      logoUrl: generateLogoUrl("LOGO 4"),
      name: "商品4",
      pointRate: "5.0",
      pointUp: true,
      startDate: "2019-11-01T00:00:00.000+09:00"
    }
  },
  {
    name: "商品5",
    price: 55555,
    url: "https://www.ca-wise.co.jp/",
    pointBackInfo: {
      endDate: "2019-11-30T23:59:00.000+09:00",
      logoUrl: generateLogoUrl("LOGO 5"),
      name: "商品5",
      pointRate: "2.0",
      pointUp: false,
      startDate: "2019-11-01T00:00:00.000+09:00"
    }
  },
  {
    name: "商品6",
    price: 66666,
    url: "https://www.ca-wise.co.jp/",
    pointBackInfo: {
      endDate: "2019-11-30T23:59:00.000+09:00",
      logoUrl: generateLogoUrl("LOGO 6"),
      name: "商品6",
      pointRate: "20.0",
      pointUp: true,
      startDate: "2019-11-01T00:00:00.000+09:00"
    }
  },
  {
    name: "商品7",
    price: 77777,
    url: "https://www.ca-wise.co.jp/",
    pointBackInfo: {
      endDate: "2019-11-30T23:59:00.000+09:00",
      logoUrl: generateLogoUrl("LOGO 7"),
      name: "商品7",
      pointRate: "5.0",
      pointUp: true,
      startDate: "2019-11-01T00:00:00.000+09:00"
    }
  }
];

export default ads;
