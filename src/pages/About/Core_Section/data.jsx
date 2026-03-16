import React from "react";
import {
  Flag,
  Users,
  Landmark,
  Heart,
  Home,
  Ship,
  BookOpen,
  Mountain,
  Sparkles,
} from "lucide-react";

// (A) CORE CONCEPTS: About the birth of Communist Party of Vietnam
export const corePhilosophies = [
  {
    icon: <Flag className="w-12 h-12" />,
    title: "Giải phóng dân tộc",
    subtitle: "Mục tiêu hàng đầu",
    description:
      "Mục tiêu hàng đầu của cách mạng Việt Nam là giành độc lập dân tộc, đánh đổ chủ nghĩa thực dân và chế độ phong kiến.",
    principles: [
      "Giải phóng dân tộc khỏi ách thực dân",
      "Chống chế độ phong kiến",
      "Giành độc lập và tự do cho dân tộc",
    ],
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: "Đại đoàn kết toàn dân tộc",
    subtitle: "Sức mạnh vô địch",
    description:
      "Lấy liên minh công - nông làm nền tảng; đoàn kết mọi tầng lớp, tôn giáo và dân tộc vì mục tiêu chung của đất nước.",
    principles: [
      "Đoàn kết là chiến lược lâu dài",
      "Mặt trận dân tộc thống nhất",
      "Kết hợp sức mạnh dân tộc và sức mạnh thời đại",
    ],
  },
  {
    icon: <Landmark className="w-12 h-12" />,
    title: "Đảng lãnh đạo",
    subtitle: "Trụ cột tổ chức",
    description:
      "Đảng phải trong sạch, vững mạnh, gắn bó với nhân dân; xây dựng Nhà nước của dân, do dân và vì dân.",
    principles: [
      "Đảng là đạo đức, là văn minh",
      "Cán bộ là công bộc của nhân dân",
      "Chống quan liêu, tham nhũng và lãng phí",
    ],
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: "Kết hợp lý luận với thực tiễn",
    subtitle: "Nguyên tắc quan trọng",
    description:
      "Kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.",
    principles: [
      "Lý luận chỉ đạo thực tiễn",
      "Sáng tạo trong vận dụng",
      "Phù hợp với điều kiện Việt Nam",
    ],
  },
];

// (B) INTRO SLIDES
export const introSlides = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/6b/Nha_Rong_Wharf.jpg",
    title: "Bối cảnh lịch sử",
    text:
      "Cuối thế kỷ XIX, Việt Nam dưới ách thống trị của thực dân Pháp. Nhiều phong trào yêu nước như Cần Vương, Yên Thế, Đông Du đều thất bại, đặt ra yêu cầu phải tìm con đường cứu nước mới.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/0b/Ho_Chi_Minh_1946.jpg",
    title: "Nguyễn Ái Quốc ra đi tìm đường cứu nước",
    text:
      "Ngày 5/6/1911, Nguyễn Ái Quốc rời Sài Gòn tại Bến Nhà Rồng trên tàu Amiral Latouche-Tréville, bắt đầu hành trình tìm con đường giải phóng dân tộc.",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Declaration_of_Independence_of_the_Democratic_Republic_of_Vietnam_1945.jpg",
    title: "Thành lập Đảng Cộng sản Việt Nam",
    text:
      "Tháng 2/1930, Hội nghị hợp nhất các tổ chức cộng sản tại Hồng Kông quyết định thành lập Đảng Cộng sản Việt Nam, mở ra bước ngoặt lớn cho cách mạng Việt Nam.",
  },
];

// (C) GRID CONCEPTS
export const concepts = [
  {
    icon: Home,
    title: "1890 - 1911: Khởi đầu",
    text: "Từ làng quê Nghệ An, Nguyễn Tất Thành nuôi chí lớn tìm con đường cứu nước.",
  },
  {
    icon: Ship,
    title: "1911 - 1930: Tìm đường",
    text: "Bôn ba nhiều quốc gia, tiếp cận chủ nghĩa Mác - Lênin và hình thành tư tưởng cách mạng.",
  },
  {
    icon: BookOpen,
    title: "1930: Thành lập Đảng",
    text: "Hội nghị hợp nhất tại Hồng Kông thành lập Đảng Cộng sản Việt Nam.",
  },
  {
    icon: Flag,
    title: "1945: Cách mạng Tháng Tám",
    text: "Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa.",
  },
  {
    icon: Mountain,
    title: "1954 - 1975: Giải phóng và thống nhất",
    text: "Từ chiến thắng Điện Biên Phủ đến ngày đất nước thống nhất năm 1975.",
  },
  {
    icon: Sparkles,
    title: "Hiện tại: Di sản sống động",
    text: "Tư tưởng Hồ Chí Minh tiếp tục được vận dụng trong công cuộc đổi mới và hội nhập.",
  },
];

// (D) TIMELINE
export const timelineEvents = [
  {
    year: "1890",
    title: "Khởi đầu hành trình",
    subtitle: "Sinh ra tại Làng Sen",
    description:
      "Nguyễn Sinh Cung (Hồ Chí Minh) sinh ra tại Làng Sen, Nghệ An trong bối cảnh đất nước mất độc lập.",
    quote: "Dân ta phải biết sử ta.",
    author: "Hồ Chí Minh",
    details:
      "Từ truyền thống gia đình và quê hương đã hình thành ý chí yêu nước và khát vọng độc lập.",
  },
  {
    year: "1911",
    title: "Bến Nhà Rồng",
    subtitle: "Ra đi tìm đường cứu nước",
    description:
      "Ngày 5/6/1911, Người rời Sài Gòn trên tàu Amiral Latouche-Tréville, bắt đầu hành trình tìm con đường giải phóng dân tộc.",
    quote: "Tôi muốn đi ra ngoài xem nước Pháp và các nước khác làm như thế nào.",
    author: "Hồ Chí Minh",
    details:
      "Trong hành trình, Người tiếp xúc với nhiều tư tưởng tiến bộ và tìm thấy con đường cách mạng.",
  },
  {
    year: "1925",
    title: "Truyền bá tư tưởng",
    subtitle: "Hội Việt Nam Cách mạng Thanh niên",
    description:
      "Năm 1925 tại Quảng Châu, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên.",
    quote: "Đảng là người lãnh đạo, người tổ chức, người giáo dục quần chúng.",
    author: "Hồ Chí Minh",
    details:
      "Đây là bước chuẩn bị quan trọng về tổ chức và tư tưởng cho sự ra đời của Đảng.",
  },
  {
    year: "1930",
    title: "Thành lập Đảng",
    subtitle: "Đảng Cộng sản Việt Nam ra đời",
    description:
      "Tháng 2/1930, Hội nghị hợp nhất tại Hồng Kông quyết định thành lập Đảng Cộng sản Việt Nam.",
    quote: "Đảng có vững cách mạng mới thành công.",
    author: "Hồ Chí Minh",
    details:
      "Sự ra đời của Đảng thống nhất phong trào cách mạng và xác lập lực lượng lãnh đạo.",
  },
  {
    year: "1945",
    title: "Cách mạng Tháng Tám",
    subtitle: "Tuyên ngôn Độc lập",
    description:
      "Thắng lợi của Cách mạng Tháng Tám 1945 khai sinh nước Việt Nam Dân chủ Cộng hòa.",
    quote: "Không có gì quý hơn độc lập, tự do.",
    author: "Hồ Chí Minh",
    details:
      "Độc lập dân tộc gắn liền với quyền sống, quyền tự do và hạnh phúc của nhân dân.",
  },
  {
    year: "1954",
    title: "Điện Biên Phủ",
    subtitle: "Chiến thắng lịch sử",
    description:
      "Chiến thắng Điện Biên Phủ khẳng định sức mạnh của đường lối cách mạng và khối đại đoàn kết toàn dân.",
    quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    author: "Hồ Chí Minh",
    details:
      "Chiến thắng đã làm thay đổi cục diện lịch sử của cuộc kháng chiến chống thực dân Pháp.",
  },
  {
    year: "1969",
    title: "Di sản bất diệt",
    subtitle: "Ánh sáng vĩnh cửu",
    description:
      "Chủ tịch Hồ Chí Minh qua đời nhưng tư tưởng và đạo đức của Người vẫn sống mãi.",
    quote:
      "Tư tưởng Hồ Chí Minh là tài sản tinh thần vô giá của Đảng và dân tộc.",
    author: "Đảng Cộng sản Việt Nam",
    details:
      "Di sản tư tưởng của Người tiếp tục soi đường cho sự nghiệp xây dựng và phát triển đất nước.",
  },
];