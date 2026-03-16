import { Flag, Ship, Landmark, Users, Heart, Sparkles } from 'lucide-react';

const base = import.meta.env.BASE_URL;

export const bannerImages = [
  `${base}kdht.png`,
  `${base}bnr.png`,
  `${base}mtdl.png`,
  `${base}smdk.png`,
  `${base}dssd.png`,
];

export const introSlides = [
  {
    image: bannerImages[0],
    title: 'Bối cảnh lịch sử',
    text: 'Cuối thế kỷ XIX, Việt Nam trong tình trạng khủng hoảng về đường lối cứu nước. Các phong trào yêu nước như Cần Vương, Yên Thế, Đông Du đều thất bại.',
  },
  {
    image: bannerImages[1],
    title: 'Nguyễn Ái Quốc ra đi tìm đường cứu nước',
    text: 'Ngày 5/6/1911, Nguyễn Ái Quốc rời bến cảng Nhà Rồng để tìm đường cứu nước. Hành trình bôn ba khắp năm châu bốn biển.',
  },
  {
    image: bannerImages[2],
    title: 'Tiếp cận Chủ nghĩa Mác - Lênin',
    text: 'Năm 1920, tại Đại hội Đảng Cộng sản Pháp, Nguyễn Ái Quốc đọc được Luận cương của Lênin về vấn đề dân tộc và thuộc địa.',
  },
  {
    image: bannerImages[3],
    title: 'Thành lập Đảng Cộng sản Việt Nam',
    text: 'Tháng 2/1930, Hội nghị hợp nhất tại Hồng Kông thành lập Đảng Cộng sản Việt Nam - sự kiện lịch sử trọng đại.',
  },
  {
    image: bannerImages[4],
    title: 'Ý nghĩa lịch sử',
    text: 'Sự ra đời của Đảng chấm dứt khủng hoảng về đường lối, đánh dấu bước ngoặt trong cách mạng Việt Nam.',
  },
];

export const concepts = [
  {
    icon: Flag,
    title: 'Giải phóng dân tộc',
    text: 'Mục tiêu hàng đầu của cách mạng Việt Nam là giành độc lập dân tộc, đánh đổ đế quốc và phong kiến.',
  },
  {
    icon: Users,
    title: 'Kết hợp lý luận với thực tiễn',
    text: 'Kết hợp Chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.',
  },
  {
    icon: Landmark,
    title: 'Đảng lãnh đạo',
    text: 'Đảng Cộng sản Việt Nam là lực lượng lãnh đạo, tổ chức và giáo dục quần chúng.',
  },
  {
    icon: Heart,
    title: 'Đại đoàn kết',
    text: 'Tập hợp lực lượng toàn dân, không phân biệt giai cấp, tôn giáo hay dân tộc.',
  },
  {
    icon: Ship,
    title: 'Hành trình hình thành',
    text: 'Từ 1911–1930: tìm đường cứu nước; 1930: thành lập Đảng; 1945: cách mạng thành công.',
  },
  {
    icon: Sparkles,
    title: 'Di sản ngày nay',
    text: 'Đảng lãnh đạo nhân dân giành nhiều thắng lợi, từ kháng chiến đến công cuộc đổi mới.',
  },
];