export const DATASET_VERSION = 2;

export const chapters = [
  {
    id: 1,
    title: "Chương 1: Bối cảnh lịch sử trước khi Đảng ra đời",
    description:
      "Tình hình Việt Nam cuối thế kỷ XIX đầu thế kỷ XX và yêu cầu thành lập một chính đảng cách mạng",
    icon: "flag",
    questions: [
      {
        id: 1,
        term: "Thực dân Pháp xâm lược Việt Nam",
        definition:
          "Năm 1858, thực dân Pháp nổ súng xâm lược Việt Nam tại Đà Nẵng.",
        quiz: {
          question: "Thực dân Pháp bắt đầu xâm lược Việt Nam vào năm nào?",
          options: ["1858", "1885", "1911", "1930"],
          correct: 0,
        },
        fillAnswer: "Thực dân Pháp bắt đầu xâm lược Việt Nam vào năm ______",
        answer: "1858",
      },
      {
        id: 2,
        term: "Chế độ thuộc địa nửa phong kiến",
        definition:
          "Dưới ách thống trị của Pháp, Việt Nam trở thành một nước thuộc địa nửa phong kiến.",
        quiz: {
          question: "Việt Nam dưới ách thống trị của Pháp mang tính chất gì?",
          options: [
            "Tư bản chủ nghĩa",
            "Thuộc địa nửa phong kiến",
            "Xã hội chủ nghĩa",
            "Phong kiến độc lập",
          ],
          correct: 1,
        },
        fillAnswer: "Việt Nam trở thành nước ______",
        answer: "thuộc địa nửa phong kiến",
      },
      {
        id: 3,
        term: "Mâu thuẫn cơ bản trong xã hội Việt Nam",
        definition:
          "Mâu thuẫn cơ bản là mâu thuẫn giữa toàn thể dân tộc Việt Nam với thực dân Pháp xâm lược.",
        quiz: {
          question:
            "Mâu thuẫn cơ bản nhất trong xã hội Việt Nam đầu thế kỷ XX là gì?",
          options: [
            "Mâu thuẫn giữa nông dân với địa chủ",
            "Mâu thuẫn giữa công nhân với tư sản",
            "Mâu thuẫn giữa dân tộc Việt Nam với thực dân Pháp",
            "Mâu thuẫn giữa miền Bắc và miền Nam",
          ],
          correct: 2,
        },
        fillAnswer: "Mâu thuẫn cơ bản là giữa dân tộc Việt Nam với ______",
        answer: "thực dân Pháp",
      },
      {
        id: 4,
        term: "Các phong trào yêu nước theo khuynh hướng phong kiến",
        definition:
          "Các phong trào như Cần Vương, khởi nghĩa Yên Thế thể hiện tinh thần yêu nước nhưng đều thất bại.",
        quiz: {
          question: "Phong trào Cần Vương thuộc khuynh hướng nào?",
          options: ["Phong kiến", "Vô sản", "Tư sản", "Xã hội chủ nghĩa"],
          correct: 0,
        },
        fillAnswer: "Phong trào Cần Vương thuộc khuynh hướng ______",
        answer: "phong kiến",
      },
      {
        id: 5,
        term: "Phong trào yêu nước theo khuynh hướng dân chủ tư sản",
        definition:
          "Đầu thế kỷ XX xuất hiện các phong trào Đông Du, Đông Kinh Nghĩa Thục, Duy Tân.",
        quiz: {
          question: "Phong trào Đông Du gắn liền với tên tuổi của ai?",
          options: [
            "Phan Bội Châu",
            "Phan Châu Trinh",
            "Nguyễn Ái Quốc",
            "Hoàng Hoa Thám",
          ],
          correct: 0,
        },
        fillAnswer: "Phong trào Đông Du gắn với ______",
        answer: "Phan Bội Châu",
      },
      {
        id: 6,
        term: "Sự thất bại của các phong trào yêu nước",
        definition:
          "Các phong trào yêu nước trước khi Đảng ra đời đều thất bại do thiếu đường lối đúng đắn.",
        quiz: {
          question:
            "Nguyên nhân chủ yếu khiến các phong trào yêu nước trước 1930 thất bại là gì?",
          options: [
            "Thiếu vũ khí",
            "Thiếu đường lối cứu nước đúng đắn",
            "Thiếu lòng yêu nước",
            "Thiếu sự ủng hộ của nông dân",
          ],
          correct: 1,
        },
        fillAnswer:
          "Các phong trào yêu nước thất bại chủ yếu vì thiếu ______ đúng đắn",
        answer: "đường lối cứu nước",
      },
      {
        id: 7,
        term: "Nguyễn Ái Quốc ra đi tìm đường cứu nước",
        definition:
          "Ngày 5/6/1911, Nguyễn Ái Quốc ra đi tìm đường cứu nước từ bến Nhà Rồng.",
        quiz: {
          question: "Nguyễn Ái Quốc ra đi tìm đường cứu nước vào ngày nào?",
          options: ["5/6/1911", "3/2/1930", "19/8/1945", "2/9/1945"],
          correct: 0,
        },
        fillAnswer: "Nguyễn Ái Quốc ra đi tìm đường cứu nước ngày ______",
        answer: "5/6/1911",
      },
      {
        id: 8,
        term: "Bến cảng Nhà Rồng",
        definition:
          "Nguyễn Ái Quốc ra đi tìm đường cứu nước từ bến cảng Nhà Rồng.",
        quiz: {
          question: "Nguyễn Ái Quốc ra đi tìm đường cứu nước từ đâu?",
          options: ["Bến Nhà Rồng", "Hải Phòng", "Huế", "Hà Nội"],
          correct: 0,
        },
        fillAnswer: "Người ra đi từ ______",
        answer: "Bến Nhà Rồng",
      },
      {
        id: 9,
        term: "Mục đích ra đi của Nguyễn Ái Quốc",
        definition:
          "Nguyễn Ái Quốc ra đi nhằm tìm con đường giải phóng dân tộc.",
        quiz: {
          question: "Mục tiêu lớn nhất của Nguyễn Ái Quốc khi ra đi là gì?",
          options: [
            "Đi du học",
            "Tìm đường cứu nước",
            "Buôn bán",
            "Thăm bạn bè quốc tế",
          ],
          correct: 1,
        },
        fillAnswer: "Nguyễn Ái Quốc ra đi để ______",
        answer: "tìm đường cứu nước",
      },
      {
        id: 10,
        term: "Ảnh hưởng của Cách mạng Tháng Mười Nga",
        definition:
          "Cách mạng Tháng Mười Nga năm 1917 mở ra thời đại mới cho phong trào giải phóng dân tộc.",
        quiz: {
          question: "Cách mạng Tháng Mười Nga diễn ra năm nào?",
          options: ["1917", "1911", "1920", "1930"],
          correct: 0,
        },
        fillAnswer: "Cách mạng Tháng Mười Nga diễn ra năm ______",
        answer: "1917",
      },
      {
        id: 11,
        term: "Vai trò của giai cấp công nhân",
        definition:
          "Giai cấp công nhân Việt Nam tuy ra đời muộn nhưng sớm tiếp thu tinh thần cách mạng tiên tiến.",
        quiz: {
          question:
            "Giai cấp nào được xem là lực lượng có khả năng lãnh đạo cách mạng Việt Nam theo khuynh hướng vô sản?",
          options: ["Địa chủ", "Tư sản", "Công nhân", "Tiểu thương"],
          correct: 2,
        },
        fillAnswer:
          "Lực lượng có khả năng lãnh đạo cách mạng là giai cấp ______",
        answer: "công nhân",
      },
      {
        id: 12,
        term: "Yêu cầu thành lập chính đảng cách mạng",
        definition:
          "Sự phát triển của cách mạng Việt Nam đòi hỏi phải có một chính đảng lãnh đạo.",
        quiz: {
          question:
            "Cách mạng Việt Nam đầu thế kỷ XX đặt ra yêu cầu gì cấp bách?",
          options: [
            "Mở rộng buôn bán",
            "Thành lập một chính đảng cách mạng",
            "Xây dựng quân đội hiện đại",
            "Phát triển công nghiệp nặng",
          ],
          correct: 1,
        },
        fillAnswer: "Cách mạng Việt Nam đòi hỏi phải thành lập một ______",
        answer: "chính đảng cách mạng",
      },
      {
        id: 13,
        term: "Con đường cứu nước theo khuynh hướng vô sản",
        definition:
          "Nguyễn Ái Quốc đã lựa chọn con đường cứu nước theo khuynh hướng cách mạng vô sản.",
        quiz: {
          question:
            "Nguyễn Ái Quốc lựa chọn con đường cứu nước theo khuynh hướng nào?",
          options: ["Phong kiến", "Tư sản", "Vô sản", "Cải lương"],
          correct: 2,
        },
        fillAnswer: "Người lựa chọn con đường cách mạng ______",
        answer: "vô sản",
      },
      {
        id: 14,
        term: "Khủng hoảng đường lối cứu nước",
        definition:
          "Trước khi Đảng ra đời, cách mạng Việt Nam lâm vào tình trạng khủng hoảng về đường lối và giai cấp lãnh đạo.",
        quiz: {
          question:
            "Trước năm 1930, cách mạng Việt Nam khủng hoảng chủ yếu về vấn đề gì?",
          options: [
            "Tài chính",
            "Đường lối và giai cấp lãnh đạo",
            "Lương thực",
            "Biên giới",
          ],
          correct: 1,
        },
        fillAnswer:
          "Cách mạng Việt Nam khủng hoảng về ______ và giai cấp lãnh đạo",
        answer: "đường lối",
      },
      {
        id: 15,
        term: "Phong trào công nhân phát triển",
        definition:
          "Phong trào công nhân Việt Nam dần chuyển từ tự phát sang tự giác trong những năm 1920.",
        quiz: {
          question:
            "Phong trào công nhân Việt Nam trong thập niên 1920 có xu hướng phát triển như thế nào?",
          options: [
            "Từ mạnh sang yếu",
            "Từ tự phát sang tự giác",
            "Từ nông thôn ra thành thị",
            "Từ bí mật sang công khai",
          ],
          correct: 1,
        },
        fillAnswer: "Phong trào công nhân phát triển từ tự phát sang ______",
        answer: "tự giác",
      },
      {
        id: 16,
        term: "Sự cần thiết của lý luận cách mạng",
        definition:
          "Muốn cách mạng thành công phải có lý luận cách mạng soi đường.",
        quiz: {
          question: "Yếu tố nào có vai trò soi đường cho cách mạng?",
          options: [
            "Vũ khí hiện đại",
            "Lý luận cách mạng",
            "Ngoại thương",
            "Sự trợ giúp quân sự",
          ],
          correct: 1,
        },
        fillAnswer: "Muốn cách mạng thành công cần có ______ soi đường",
        answer: "lý luận cách mạng",
      },
      {
        id: 17,
        term: "Tinh thần yêu nước của nhân dân Việt Nam",
        definition:
          "Yêu nước là truyền thống quý báu và là động lực lớn của các phong trào đấu tranh.",
        quiz: {
          question:
            "Truyền thống nổi bật của dân tộc Việt Nam trong đấu tranh chống ngoại xâm là gì?",
          options: ["Hiếu học", "Yêu nước", "Kinh doanh", "Du lịch"],
          correct: 1,
        },
        fillAnswer: "Truyền thống nổi bật của dân tộc Việt Nam là ______",
        answer: "yêu nước",
      },
      {
        id: 18,
        term: "Sự bế tắc của con đường cứu nước cũ",
        definition:
          "Các khuynh hướng cứu nước phong kiến và tư sản đều không giải quyết được nhiệm vụ giải phóng dân tộc.",
        quiz: {
          question:
            "Các khuynh hướng cứu nước cũ trước năm 1930 có điểm chung nào?",
          options: [
            "Đều thành công",
            "Đều giải phóng được dân tộc",
            "Đều rơi vào bế tắc",
            "Đều được quốc tế ủng hộ mạnh",
          ],
          correct: 2,
        },
        fillAnswer: "Các khuynh hướng cứu nước cũ đều rơi vào ______",
        answer: "bế tắc",
      },
      {
        id: 19,
        term: "Vai trò chuẩn bị của Nguyễn Ái Quốc",
        definition:
          "Nguyễn Ái Quốc chuẩn bị về tư tưởng, chính trị và tổ chức cho sự ra đời của Đảng.",
        quiz: {
          question:
            "Nguyễn Ái Quốc đã chuẩn bị những mặt cơ bản nào cho sự ra đời của Đảng?",
          options: [
            "Kinh tế, văn hóa, giáo dục",
            "Tư tưởng, chính trị, tổ chức",
            "Quân sự, ngoại giao, tài chính",
            "Địa lý, dân số, tài nguyên",
          ],
          correct: 1,
        },
        fillAnswer: "Nguyễn Ái Quốc chuẩn bị về tư tưởng, chính trị và ______",
        answer: "tổ chức",
      },
      {
        id: 20,
        term: "Ý nghĩa bối cảnh lịch sử",
        definition:
          "Bối cảnh lịch sử cuối thế kỷ XIX đầu XX đặt nền tảng cho sự ra đời tất yếu của Đảng Cộng sản Việt Nam.",
        quiz: {
          question:
            "Bối cảnh lịch sử Việt Nam đầu thế kỷ XX dẫn tới yêu cầu tất yếu nào?",
          options: [
            "Thành lập ngân hàng quốc gia",
            "Ra đời một chính đảng cách mạng của giai cấp công nhân",
            "Mở rộng đô thị",
            "Xây dựng nền quân chủ",
          ],
          correct: 1,
        },
        fillAnswer: "Bối cảnh lịch sử dẫn tới sự ra đời tất yếu của ______",
        answer: "Đảng Cộng sản Việt Nam",
      },
    ],
  },
  {
    id: 2,
    title: "Chương 2: Nguyễn Ái Quốc chuẩn bị cho sự ra đời của Đảng",
    description:
      "Quá trình tìm đường cứu nước, truyền bá chủ nghĩa Mác - Lênin và chuẩn bị về tổ chức",
    icon: "search",
    questions: [
      {
        id: 1,
        term: "Bản yêu sách của nhân dân An Nam",
        definition:
          "Năm 1919, Nguyễn Ái Quốc gửi Bản yêu sách của nhân dân An Nam đến Hội nghị Véc-xây.",
        quiz: {
          question:
            "Nguyễn Ái Quốc gửi Bản yêu sách của nhân dân An Nam vào năm nào?",
          options: ["1917", "1919", "1925", "1930"],
          correct: 1,
        },
        fillAnswer: "Nguyễn Ái Quốc gửi Bản yêu sách vào năm ______",
        answer: "1919",
      },
      {
        id: 2,
        term: "Hội nghị Véc-xây",
        definition:
          "Tại Hội nghị Véc-xây, Nguyễn Ái Quốc thay mặt nhân dân Việt Nam đòi quyền tự do, dân chủ.",
        quiz: {
          question:
            "Bản yêu sách của nhân dân An Nam được gửi tới hội nghị nào?",
          options: [
            "Hội nghị Giơnevơ",
            "Hội nghị Véc-xây",
            "Hội nghị Ianta",
            "Hội nghị Bandung",
          ],
          correct: 1,
        },
        fillAnswer: "Bản yêu sách được gửi tới Hội nghị ______",
        answer: "Véc-xây",
      },
      {
        id: 3,
        term: "Đọc Luận cương của Lênin",
        definition:
          "Năm 1920, Nguyễn Ái Quốc đọc Sơ thảo luận cương của Lênin về vấn đề dân tộc và thuộc địa.",
        quiz: {
          question:
            "Nguyễn Ái Quốc tìm thấy con đường cứu nước qua việc đọc tác phẩm nào của Lênin?",
          options: [
            "Nhà nước và cách mạng",
            "Sơ thảo luận cương về vấn đề dân tộc và thuộc địa",
            "Làm gì?",
            "Tuyên ngôn của Đảng Cộng sản",
          ],
          correct: 1,
        },
        fillAnswer:
          "Nguyễn Ái Quốc tìm thấy con đường cứu nước qua ______ của Lênin",
        answer: "Sơ thảo luận cương về vấn đề dân tộc và thuộc địa",
      },
      {
        id: 4,
        term: "Đại hội Tua",
        definition:
          "Tháng 12/1920, tại Đại hội Tua, Nguyễn Ái Quốc bỏ phiếu tán thành gia nhập Quốc tế Cộng sản.",
        quiz: {
          question:
            "Sự kiện Nguyễn Ái Quốc tham gia sáng lập Đảng Cộng sản Pháp diễn ra tại đâu?",
          options: [
            "Đại hội Tua",
            "Hội nghị Hồng Kông",
            "Moscow",
            "Quảng Châu",
          ],
          correct: 0,
        },
        fillAnswer:
          "Nguyễn Ái Quốc tham gia sáng lập Đảng Cộng sản Pháp tại ______",
        answer: "Đại hội Tua",
      },
      {
        id: 5,
        term: "Trở thành người cộng sản Việt Nam đầu tiên",
        definition:
          "Năm 1920, Nguyễn Ái Quốc trở thành người cộng sản Việt Nam đầu tiên.",
        quiz: {
          question:
            "Nguyễn Ái Quốc trở thành người cộng sản Việt Nam đầu tiên vào năm nào?",
          options: ["1911", "1919", "1920", "1925"],
          correct: 2,
        },
        fillAnswer:
          "Nguyễn Ái Quốc trở thành người cộng sản Việt Nam đầu tiên vào năm ______",
        answer: "1920",
      },
      {
        id: 6,
        term: "Truyền bá chủ nghĩa Mác - Lênin",
        definition:
          "Nguyễn Ái Quốc tích cực truyền bá chủ nghĩa Mác - Lênin vào phong trào công nhân và phong trào yêu nước Việt Nam.",
        quiz: {
          question: "Nguyễn Ái Quốc đã truyền bá hệ tư tưởng nào vào Việt Nam?",
          options: [
            "Nho giáo",
            "Chủ nghĩa Mác - Lênin",
            "Chủ nghĩa tự do",
            "Thuyết quân chủ",
          ],
          correct: 1,
        },
        fillAnswer: "Nguyễn Ái Quốc truyền bá ______ vào Việt Nam",
        answer: "chủ nghĩa Mác - Lênin",
      },
      {
        id: 7,
        term: "Hội Việt Nam Cách mạng Thanh niên",
        definition:
          "Tháng 6/1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên ở Quảng Châu.",
        quiz: {
          question:
            "Hội Việt Nam Cách mạng Thanh niên được thành lập vào năm nào?",
          options: ["1923", "1924", "1925", "1930"],
          correct: 2,
        },
        fillAnswer:
          "Hội Việt Nam Cách mạng Thanh niên được thành lập năm ______",
        answer: "1925",
      },
      {
        id: 8,
        term: "Địa điểm thành lập Hội Việt Nam Cách mạng Thanh niên",
        definition:
          "Hội Việt Nam Cách mạng Thanh niên được thành lập tại Quảng Châu, Trung Quốc.",
        quiz: {
          question: "Hội Việt Nam Cách mạng Thanh niên được thành lập ở đâu?",
          options: ["Hà Nội", "Quảng Châu", "Hồng Kông", "Paris"],
          correct: 1,
        },
        fillAnswer:
          "Hội Việt Nam Cách mạng Thanh niên được thành lập tại ______",
        answer: "Quảng Châu",
      },
      {
        id: 9,
        term: "Báo Thanh Niên",
        definition:
          "Nguyễn Ái Quốc sáng lập báo Thanh Niên để truyền bá tư tưởng cách mạng.",
        quiz: {
          question:
            "Tờ báo do Nguyễn Ái Quốc sáng lập để truyền bá tư tưởng cách mạng là gì?",
          options: ["Nhân Dân", "Thanh Niên", "Tiền Phong", "Lao Động"],
          correct: 1,
        },
        fillAnswer: "Tờ báo do Nguyễn Ái Quốc sáng lập là ______",
        answer: "Thanh Niên",
      },
      {
        id: 10,
        term: "Tác phẩm Đường Kách Mệnh",
        definition:
          "Đường Kách Mệnh là tác phẩm tập hợp các bài giảng của Nguyễn Ái Quốc cho cán bộ cách mạng.",
        quiz: {
          question:
            "Tác phẩm nổi tiếng của Nguyễn Ái Quốc dùng để huấn luyện cán bộ cách mạng là gì?",
          options: [
            "Bản án chế độ thực dân Pháp",
            "Đường Kách Mệnh",
            "Di chúc",
            "Nhật ký trong tù",
          ],
          correct: 1,
        },
        fillAnswer: "Tác phẩm dùng để huấn luyện cán bộ cách mạng là ______",
        answer: "Đường Kách Mệnh",
      },
      {
        id: 11,
        term: "Phong trào vô sản hóa",
        definition:
          "Phong trào vô sản hóa góp phần gắn bó cán bộ cách mạng với công nhân và quần chúng lao động.",
        quiz: {
          question: "Phong trào vô sản hóa nhằm mục đích chủ yếu gì?",
          options: [
            "Đưa cán bộ vào nhà máy, hầm mỏ để gắn với công nhân",
            "Đưa nông dân ra thành phố",
            "Mở trường học",
            "Xây dựng chính quyền",
          ],
          correct: 0,
        },
        fillAnswer:
          "Phong trào vô sản hóa nhằm đưa cán bộ gắn bó với giai cấp ______",
        answer: "công nhân",
      },
      {
        id: 12,
        term: "Chuẩn bị về chính trị",
        definition:
          "Nguyễn Ái Quốc xây dựng đường lối cách mạng giải phóng dân tộc theo khuynh hướng vô sản.",
        quiz: {
          question:
            "Nguyễn Ái Quốc chuẩn bị về chính trị cho sự ra đời của Đảng bằng cách nào?",
          options: [
            "Đề ra đường lối cách mạng đúng đắn",
            "Xây dựng quân đội hiện đại",
            "Mở rộng ngoại thương",
            "Phát hành tiền tệ",
          ],
          correct: 0,
        },
        fillAnswer:
          "Nguyễn Ái Quốc chuẩn bị về chính trị bằng cách đề ra ______ cách mạng đúng đắn",
        answer: "đường lối",
      },
      {
        id: 13,
        term: "Chuẩn bị về tư tưởng",
        definition:
          "Nguyễn Ái Quốc truyền bá chủ nghĩa Mác - Lênin, làm cho tư tưởng vô sản thâm nhập vào phong trào cách mạng.",
        quiz: {
          question:
            "Nguyễn Ái Quốc chuẩn bị về tư tưởng cho Đảng chủ yếu bằng việc gì?",
          options: [
            "Truyền bá chủ nghĩa Mác - Lênin",
            "Phát động chiến tranh",
            "Mở nhà máy",
            "Lập ngân hàng",
          ],
          correct: 0,
        },
        fillAnswer:
          "Nguyễn Ái Quốc chuẩn bị về tư tưởng bằng cách truyền bá ______",
        answer: "chủ nghĩa Mác - Lênin",
      },
      {
        id: 14,
        term: "Chuẩn bị về tổ chức",
        definition:
          "Thông qua Hội Việt Nam Cách mạng Thanh niên, Nguyễn Ái Quốc đào tạo đội ngũ cán bộ cho cách mạng.",
        quiz: {
          question:
            "Nguyễn Ái Quốc chuẩn bị về tổ chức cho sự ra đời của Đảng thông qua tổ chức nào?",
          options: [
            "Việt Nam Quốc dân đảng",
            "Hội Việt Nam Cách mạng Thanh niên",
            "Đông Kinh Nghĩa Thục",
            "Hội Duy Tân",
          ],
          correct: 1,
        },
        fillAnswer: "Nguyễn Ái Quốc chuẩn bị về tổ chức thông qua ______",
        answer: "Hội Việt Nam Cách mạng Thanh niên",
      },
      {
        id: 15,
        term: "Bản án chế độ thực dân Pháp",
        definition:
          "Nguyễn Ái Quốc viết Bản án chế độ thực dân Pháp để tố cáo tội ác của chủ nghĩa thực dân.",
        quiz: {
          question:
            "Tác phẩm nào của Nguyễn Ái Quốc tố cáo bản chất tàn bạo của thực dân Pháp?",
          options: [
            "Đường Kách Mệnh",
            "Bản án chế độ thực dân Pháp",
            "Di chúc",
            "Tuyên ngôn độc lập",
          ],
          correct: 1,
        },
        fillAnswer: "Tác phẩm tố cáo tội ác thực dân Pháp là ______",
        answer: "Bản án chế độ thực dân Pháp",
      },
      {
        id: 16,
        term: "Ý nghĩa hoạt động của Nguyễn Ái Quốc",
        definition:
          "Hoạt động của Nguyễn Ái Quốc có ý nghĩa quyết định đối với sự ra đời của Đảng Cộng sản Việt Nam.",
        quiz: {
          question:
            "Hoạt động chuẩn bị của Nguyễn Ái Quốc có ý nghĩa như thế nào đối với sự ra đời của Đảng?",
          options: [
            "Thứ yếu",
            "Không đáng kể",
            "Có ý nghĩa quyết định",
            "Chỉ mang tính tham khảo",
          ],
          correct: 2,
        },
        fillAnswer:
          "Hoạt động của Nguyễn Ái Quốc có ý nghĩa ______ đối với sự ra đời của Đảng",
        answer: "quyết định",
      },
      {
        id: 17,
        term: "Kết hợp phong trào công nhân với phong trào yêu nước",
        definition:
          "Nguyễn Ái Quốc đã gắn chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước Việt Nam.",
        quiz: {
          question:
            "Yếu tố nào được Nguyễn Ái Quốc kết hợp để chuẩn bị thành lập Đảng?",
          options: [
            "Phong trào công nhân và phong trào yêu nước",
            "Nông dân và thương nhân",
            "Quân đội và trí thức",
            "Tư sản và địa chủ",
          ],
          correct: 0,
        },
        fillAnswer:
          "Nguyễn Ái Quốc kết hợp phong trào công nhân với phong trào ______",
        answer: "yêu nước",
      },
      {
        id: 18,
        term: "Quảng Châu - trung tâm huấn luyện cán bộ",
        definition:
          "Quảng Châu là nơi Nguyễn Ái Quốc trực tiếp huấn luyện nhiều cán bộ cách mạng Việt Nam.",
        quiz: {
          question:
            "Nơi Nguyễn Ái Quốc trực tiếp huấn luyện nhiều cán bộ cách mạng Việt Nam là ở đâu?",
          options: ["Moscow", "Quảng Châu", "Huế", "Sài Gòn"],
          correct: 1,
        },
        fillAnswer: "Nguyễn Ái Quốc trực tiếp huấn luyện cán bộ ở ______",
        answer: "Quảng Châu",
      },
      {
        id: 19,
        term: "Con đường giải phóng dân tộc",
        definition:
          "Nguyễn Ái Quốc khẳng định chỉ có cách mạng vô sản mới giải phóng được dân tộc bị áp bức.",
        quiz: {
          question:
            "Theo Nguyễn Ái Quốc, con đường nào có thể giải phóng dân tộc Việt Nam?",
          options: [
            "Con đường phong kiến",
            "Con đường tư sản",
            "Con đường cách mạng vô sản",
            "Con đường cải lương",
          ],
          correct: 2,
        },
        fillAnswer:
          "Con đường giải phóng dân tộc là con đường cách mạng ______",
        answer: "vô sản",
      },
      {
        id: 20,
        term: "Vai trò lịch sử của Nguyễn Ái Quốc",
        definition:
          "Nguyễn Ái Quốc là người sáng lập và rèn luyện Đảng Cộng sản Việt Nam.",
        quiz: {
          question:
            "Nguyễn Ái Quốc có vai trò lịch sử gì đối với Đảng Cộng sản Việt Nam?",
          options: [
            "Người phản biện",
            "Người sáng lập và rèn luyện Đảng",
            "Người quan sát",
            "Người tài trợ",
          ],
          correct: 1,
        },
        fillAnswer: "Nguyễn Ái Quốc là người sáng lập và ______ Đảng",
        answer: "rèn luyện",
      },
    ],
  },
  {
    id: 3,
    title: "Chương 3: Sự ra đời của Đảng Cộng sản Việt Nam",
    description:
      "Các tổ chức cộng sản năm 1929, Hội nghị hợp nhất và cương lĩnh đầu tiên",
    icon: "star",
    questions: [
      {
        id: 1,
        term: "Ba tổ chức cộng sản năm 1929",
        definition:
          "Năm 1929, ở Việt Nam xuất hiện ba tổ chức cộng sản riêng rẽ.",
        quiz: {
          question:
            "Năm 1929, ở Việt Nam xuất hiện bao nhiêu tổ chức cộng sản?",
          options: ["1", "2", "3", "4"],
          correct: 2,
        },
        fillAnswer: "Năm 1929 xuất hiện ______ tổ chức cộng sản",
        answer: "3",
      },
      {
        id: 2,
        term: "Đông Dương Cộng sản đảng",
        definition:
          "Đông Dương Cộng sản đảng là một trong ba tổ chức cộng sản ra đời năm 1929.",
        quiz: {
          question:
            "Tổ chức nào sau đây là một trong ba tổ chức cộng sản năm 1929?",
          options: [
            "Đông Dương Cộng sản đảng",
            "Việt Nam Quốc dân đảng",
            "Tân Việt",
            "Cần Vương",
          ],
          correct: 0,
        },
        fillAnswer: "Một trong ba tổ chức cộng sản năm 1929 là ______",
        answer: "Đông Dương Cộng sản đảng",
      },
      {
        id: 3,
        term: "An Nam Cộng sản đảng",
        definition:
          "An Nam Cộng sản đảng là một tổ chức cộng sản thành lập năm 1929.",
        quiz: {
          question: "An Nam Cộng sản đảng ra đời vào năm nào?",
          options: ["1925", "1928", "1929", "1930"],
          correct: 2,
        },
        fillAnswer: "An Nam Cộng sản đảng ra đời năm ______",
        answer: "1929",
      },
      {
        id: 4,
        term: "Đông Dương Cộng sản liên đoàn",
        definition:
          "Đông Dương Cộng sản liên đoàn là tổ chức cộng sản thứ ba xuất hiện năm 1929.",
        quiz: {
          question: "Tổ chức cộng sản thứ ba xuất hiện năm 1929 là gì?",
          options: [
            "Đông Dương Cộng sản liên đoàn",
            "Hội Việt Nam Cách mạng Thanh niên",
            "Đảng Lập hiến",
            "Tân Việt Cách mạng đảng",
          ],
          correct: 0,
        },
        fillAnswer: "Tổ chức cộng sản thứ ba là ______",
        answer: "Đông Dương Cộng sản liên đoàn",
      },
      {
        id: 5,
        term: "Sự chia rẽ của các tổ chức cộng sản",
        definition:
          "Ba tổ chức cộng sản hoạt động riêng rẽ, tranh giành ảnh hưởng, gây bất lợi cho cách mạng.",
        quiz: {
          question:
            "Tình trạng tồn tại riêng rẽ của ba tổ chức cộng sản dẫn đến hậu quả gì?",
          options: [
            "Tăng cường đoàn kết",
            "Gây chia rẽ và bất lợi cho cách mạng",
            "Tăng sản xuất",
            "Mở rộng hợp tác quốc tế",
          ],
          correct: 1,
        },
        fillAnswer: "Sự tồn tại riêng rẽ gây ______ cho cách mạng",
        answer: "bất lợi",
      },
      {
        id: 6,
        term: "Yêu cầu hợp nhất các tổ chức cộng sản",
        definition:
          "Việc hợp nhất các tổ chức cộng sản là yêu cầu cấp bách của cách mạng Việt Nam.",
        quiz: {
          question:
            "Đầu năm 1930, yêu cầu cấp bách đối với phong trào cộng sản ở Việt Nam là gì?",
          options: [
            "Mở rộng công nghiệp",
            "Hợp nhất các tổ chức cộng sản",
            "Tăng thuế",
            "Lập chính phủ lâm thời",
          ],
          correct: 1,
        },
        fillAnswer: "Yêu cầu cấp bách là ______ các tổ chức cộng sản",
        answer: "hợp nhất",
      },
      {
        id: 7,
        term: "Hội nghị hợp nhất",
        definition:
          "Đầu năm 1930, Nguyễn Ái Quốc chủ trì Hội nghị hợp nhất các tổ chức cộng sản.",
        quiz: {
          question:
            "Ai là người chủ trì Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930?",
          options: [
            "Phan Bội Châu",
            "Nguyễn Ái Quốc",
            "Trần Phú",
            "Lê Hồng Phong",
          ],
          correct: 1,
        },
        fillAnswer: "Người chủ trì Hội nghị hợp nhất là ______",
        answer: "Nguyễn Ái Quốc",
      },
      {
        id: 8,
        term: "Địa điểm Hội nghị hợp nhất",
        definition: "Hội nghị hợp nhất diễn ra tại Cửu Long, Hồng Kông.",
        quiz: {
          question: "Hội nghị hợp nhất các tổ chức cộng sản diễn ra ở đâu?",
          options: ["Hà Nội", "Moscow", "Hồng Kông", "Quảng Châu"],
          correct: 2,
        },
        fillAnswer: "Hội nghị hợp nhất diễn ra tại ______",
        answer: "Hồng Kông",
      },
      {
        id: 9,
        term: "Thời gian thành lập Đảng",
        definition:
          "Đảng Cộng sản Việt Nam được thành lập vào đầu tháng 2 năm 1930.",
        quiz: {
          question: "Đảng Cộng sản Việt Nam được thành lập vào thời gian nào?",
          options: [
            "Tháng 2/1930",
            "Tháng 8/1945",
            "Tháng 5/1911",
            "Tháng 12/1920",
          ],
          correct: 0,
        },
        fillAnswer: "Đảng Cộng sản Việt Nam được thành lập vào ______",
        answer: "tháng 2/1930",
      },
      {
        id: 10,
        term: "Tên gọi ban đầu của Đảng",
        definition: "Khi mới thành lập, Đảng mang tên Đảng Cộng sản Việt Nam.",
        quiz: {
          question: "Tên gọi ban đầu khi thành lập đầu năm 1930 là gì?",
          options: [
            "Đảng Lao động Việt Nam",
            "Đảng Cộng sản Đông Dương",
            "Đảng Cộng sản Việt Nam",
            "Đảng Cách mạng Việt Nam",
          ],
          correct: 2,
        },
        fillAnswer: "Tên gọi ban đầu của Đảng là ______",
        answer: "Đảng Cộng sản Việt Nam",
      },
      {
        id: 11,
        term: "Chánh cương vắn tắt",
        definition:
          "Chánh cương vắn tắt là một trong những văn kiện đầu tiên của Đảng do Nguyễn Ái Quốc soạn thảo.",
        quiz: {
          question:
            "Văn kiện nào sau đây thuộc cương lĩnh chính trị đầu tiên của Đảng?",
          options: [
            "Chánh cương vắn tắt",
            "Luận cương chính trị 1930",
            "Di chúc",
            "Lời kêu gọi toàn quốc kháng chiến",
          ],
          correct: 0,
        },
        fillAnswer: "Một trong những văn kiện đầu tiên của Đảng là ______",
        answer: "Chánh cương vắn tắt",
      },
      {
        id: 12,
        term: "Sách lược vắn tắt",
        definition:
          "Sách lược vắn tắt nêu rõ phương pháp, lực lượng và nhiệm vụ của cách mạng Việt Nam.",
        quiz: {
          question:
            "Văn kiện nào cùng với Chánh cương vắn tắt hợp thành cương lĩnh đầu tiên của Đảng?",
          options: [
            "Tuyên ngôn độc lập",
            "Sách lược vắn tắt",
            "Bản án chế độ thực dân Pháp",
            "Đường Kách Mệnh",
          ],
          correct: 1,
        },
        fillAnswer: "Văn kiện đi cùng Chánh cương vắn tắt là ______",
        answer: "Sách lược vắn tắt",
      },
      {
        id: 13,
        term: "Nội dung cơ bản của cương lĩnh đầu tiên",
        definition:
          "Cương lĩnh đầu tiên xác định nhiệm vụ hàng đầu là giải phóng dân tộc.",
        quiz: {
          question:
            "Nhiệm vụ hàng đầu trong cương lĩnh chính trị đầu tiên của Đảng là gì?",
          options: [
            "Công nghiệp hóa",
            "Giải phóng dân tộc",
            "Mở rộng thương mại",
            "Phát triển du lịch",
          ],
          correct: 1,
        },
        fillAnswer: "Nhiệm vụ hàng đầu là ______",
        answer: "giải phóng dân tộc",
      },
      {
        id: 14,
        term: "Lực lượng cách mạng",
        definition:
          "Cương lĩnh đầu tiên xác định công nhân và nông dân là lực lượng chính của cách mạng.",
        quiz: {
          question:
            "Theo cương lĩnh đầu tiên, lực lượng chính của cách mạng là ai?",
          options: [
            "Địa chủ và tư sản",
            "Công nhân và nông dân",
            "Quan lại phong kiến",
            "Thương nhân và địa chủ",
          ],
          correct: 1,
        },
        fillAnswer: "Lực lượng chính của cách mạng là công nhân và ______",
        answer: "nông dân",
      },
      {
        id: 15,
        term: "Vai trò lãnh đạo của Đảng",
        definition:
          "Sự ra đời của Đảng chấm dứt khủng hoảng về đường lối và giai cấp lãnh đạo cách mạng Việt Nam.",
        quiz: {
          question:
            "Sự ra đời của Đảng đã giải quyết cuộc khủng hoảng nào của cách mạng Việt Nam?",
          options: [
            "Khủng hoảng lương thực",
            "Khủng hoảng đường lối và giai cấp lãnh đạo",
            "Khủng hoảng tài chính",
            "Khủng hoảng văn hóa",
          ],
          correct: 1,
        },
        fillAnswer:
          "Sự ra đời của Đảng giải quyết khủng hoảng về đường lối và ______",
        answer: "giai cấp lãnh đạo",
      },
      {
        id: 16,
        term: "Ý nghĩa lịch sử của sự ra đời Đảng",
        definition:
          "Đảng ra đời là bước ngoặt vĩ đại trong lịch sử cách mạng Việt Nam.",
        quiz: {
          question:
            "Sự ra đời của Đảng Cộng sản Việt Nam có ý nghĩa như thế nào?",
          options: [
            "Là bước ngoặt vĩ đại của cách mạng Việt Nam",
            "Chỉ là sự kiện nhỏ",
            "Không có ảnh hưởng",
            "Chỉ tác động đến kinh tế",
          ],
          correct: 0,
        },
        fillAnswer:
          "Sự ra đời của Đảng là ______ vĩ đại trong lịch sử cách mạng Việt Nam",
        answer: "bước ngoặt",
      },
      {
        id: 17,
        term: "Người soạn thảo cương lĩnh đầu tiên",
        definition:
          "Nguyễn Ái Quốc là người soạn thảo cương lĩnh chính trị đầu tiên của Đảng.",
        quiz: {
          question:
            "Ai là người soạn thảo cương lĩnh chính trị đầu tiên của Đảng?",
          options: ["Trần Phú", "Nguyễn Ái Quốc", "Lê Duẩn", "Hà Huy Tập"],
          correct: 1,
        },
        fillAnswer: "Người soạn thảo cương lĩnh đầu tiên là ______",
        answer: "Nguyễn Ái Quốc",
      },
      {
        id: 18,
        term: "Sự thống nhất phong trào cách mạng",
        definition:
          "Việc thành lập Đảng tạo nên sự thống nhất về tư tưởng, chính trị và tổ chức trong phong trào cách mạng.",
        quiz: {
          question:
            "Sự thành lập Đảng đã tạo ra điều gì cho phong trào cách mạng Việt Nam?",
          options: [
            "Sự chia rẽ",
            "Sự thống nhất về tư tưởng, chính trị và tổ chức",
            "Sự đình trệ",
            "Sự cô lập quốc tế",
          ],
          correct: 1,
        },
        fillAnswer:
          "Sự thành lập Đảng tạo ra sự thống nhất về tư tưởng, chính trị và ______",
        answer: "tổ chức",
      },
      {
        id: 19,
        term: "Ngày kỷ niệm thành lập Đảng",
        definition:
          "Ngày 3/2 hằng năm được lấy làm ngày kỷ niệm thành lập Đảng Cộng sản Việt Nam.",
        quiz: {
          question:
            "Ngày kỷ niệm thành lập Đảng Cộng sản Việt Nam là ngày nào?",
          options: ["3/2", "2/9", "19/8", "30/4"],
          correct: 0,
        },
        fillAnswer: "Ngày kỷ niệm thành lập Đảng là ______",
        answer: "3/2",
      },
      {
        id: 20,
        term: "Tính tất yếu ra đời của Đảng",
        definition:
          "Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước.",
        quiz: {
          question:
            "Đảng Cộng sản Việt Nam ra đời là kết quả của sự kết hợp giữa những yếu tố nào?",
          options: [
            "Phong trào nông dân và tư sản",
            "Chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào yêu nước",
            "Quân đội và ngoại giao",
            "Tôn giáo và giáo dục",
          ],
          correct: 1,
        },
        fillAnswer:
          "Đảng ra đời là kết quả của sự kết hợp chủ nghĩa Mác - Lênin với phong trào công nhân và phong trào ______",
        answer: "yêu nước",
      },
    ],
  },
  {
    id: 4,
    title: "Chương 4: Vai trò và ý nghĩa của Đảng Cộng sản Việt Nam",
    description:
      "Vai trò lãnh đạo của Đảng trong cách mạng Việt Nam và ý nghĩa lịch sử",
    icon: "award",
    questions: [
      {
        id: 1,
        term: "Đảng lãnh đạo phong trào cách mạng",
        definition:
          "Từ khi ra đời, Đảng trở thành lực lượng lãnh đạo duy nhất của cách mạng Việt Nam.",
        quiz: {
          question:
            "Từ khi ra đời, Đảng Cộng sản Việt Nam giữ vai trò gì đối với cách mạng Việt Nam?",
          options: [
            "Lực lượng quan sát",
            "Lực lượng lãnh đạo",
            "Lực lượng trung gian",
            "Lực lượng tài trợ",
          ],
          correct: 1,
        },
        fillAnswer: "Đảng là lực lượng ______ của cách mạng Việt Nam",
        answer: "lãnh đạo",
      },
      {
        id: 2,
        term: "Cách mạng Tháng Tám 1945",
        definition:
          "Dưới sự lãnh đạo của Đảng, nhân dân Việt Nam giành chính quyền trong Cách mạng Tháng Tám 1945.",
        quiz: {
          question: "Thắng lợi nào năm 1945 gắn liền với sự lãnh đạo của Đảng?",
          options: [
            "Chiến dịch Điện Biên Phủ",
            "Cách mạng Tháng Tám",
            "Hiệp định Paris",
            "Đổi mới đất nước",
          ],
          correct: 1,
        },
        fillAnswer:
          "Năm 1945, dưới sự lãnh đạo của Đảng, thắng lợi lớn là ______",
        answer: "Cách mạng Tháng Tám",
      },
      {
        id: 3,
        term: "Nước Việt Nam Dân chủ Cộng hòa",
        definition:
          "Sau Cách mạng Tháng Tám, nước Việt Nam Dân chủ Cộng hòa ra đời ngày 2/9/1945.",
        quiz: {
          question:
            "Sau thắng lợi của Cách mạng Tháng Tám, nhà nước nào được thành lập?",
          options: [
            "Cộng hòa Xã hội Chủ nghĩa Việt Nam",
            "Việt Nam Dân chủ Cộng hòa",
            "Đế quốc Việt Nam",
            "Liên bang Đông Dương",
          ],
          correct: 1,
        },
        fillAnswer: "Sau Cách mạng Tháng Tám, nước ______ ra đời",
        answer: "Việt Nam Dân chủ Cộng hòa",
      },
      {
        id: 4,
        term: "Kháng chiến chống thực dân Pháp",
        definition:
          "Đảng lãnh đạo cuộc kháng chiến chống thực dân Pháp đi đến thắng lợi với đỉnh cao là Điện Biên Phủ.",
        quiz: {
          question:
            "Đỉnh cao của cuộc kháng chiến chống thực dân Pháp là chiến thắng nào?",
          options: [
            "Điện Biên Phủ",
            "Hà Nội - Điện Biên Phủ trên không",
            "Biên giới 1979",
            "Tổng tiến công 1968",
          ],
          correct: 0,
        },
        fillAnswer:
          "Đỉnh cao của cuộc kháng chiến chống Pháp là chiến thắng ______",
        answer: "Điện Biên Phủ",
      },
      {
        id: 5,
        term: "Hiệp định Giơnevơ 1954",
        definition:
          "Sau chiến thắng Điện Biên Phủ, Hiệp định Giơnevơ năm 1954 được ký kết.",
        quiz: {
          question: "Hiệp định Giơnevơ được ký kết vào năm nào?",
          options: ["1945", "1954", "1968", "1975"],
          correct: 1,
        },
        fillAnswer: "Hiệp định Giơnevơ được ký kết năm ______",
        answer: "1954",
      },
      {
        id: 6,
        term: "Kháng chiến chống Mỹ cứu nước",
        definition:
          "Đảng tiếp tục lãnh đạo nhân dân kháng chiến chống Mỹ, hoàn thành sự nghiệp giải phóng miền Nam.",
        quiz: {
          question: "Cuộc kháng chiến chống Mỹ kết thúc thắng lợi vào năm nào?",
          options: ["1954", "1968", "1975", "1986"],
          correct: 2,
        },
        fillAnswer: "Cuộc kháng chiến chống Mỹ thắng lợi vào năm ______",
        answer: "1975",
      },
      {
        id: 7,
        term: "Giải phóng miền Nam",
        definition:
          "Ngày 30/4/1975 đánh dấu thắng lợi hoàn toàn của cuộc kháng chiến chống Mỹ cứu nước.",
        quiz: {
          question: "Sự kiện ngày 30/4/1975 có ý nghĩa gì?",
          options: [
            "Bắt đầu đổi mới",
            "Giải phóng miền Nam, thống nhất đất nước",
            "Ký Hiệp định Giơnevơ",
            "Thành lập Đảng",
          ],
          correct: 1,
        },
        fillAnswer:
          "Ngày 30/4/1975 là ngày ______ miền Nam, thống nhất đất nước",
        answer: "giải phóng",
      },
      {
        id: 8,
        term: "Thống nhất đất nước",
        definition:
          "Sau thắng lợi năm 1975, đất nước Việt Nam được thống nhất về mặt lãnh thổ.",
        quiz: {
          question:
            "Sau năm 1975, thành quả lớn nhất của dân tộc Việt Nam là gì?",
          options: [
            "Phát triển công nghiệp nặng",
            "Thống nhất đất nước",
            "Gia nhập WTO",
            "Mở cửa nền kinh tế",
          ],
          correct: 1,
        },
        fillAnswer:
          "Sau năm 1975, Việt Nam hoàn thành sự nghiệp ______ đất nước",
        answer: "thống nhất",
      },
      {
        id: 9,
        term: "Công cuộc đổi mới",
        definition:
          "Đảng khởi xướng và lãnh đạo công cuộc đổi mới từ Đại hội VI năm 1986.",
        quiz: {
          question: "Đảng khởi xướng công cuộc đổi mới vào năm nào?",
          options: ["1975", "1986", "1995", "2000"],
          correct: 1,
        },
        fillAnswer: "Đảng khởi xướng công cuộc đổi mới vào năm ______",
        answer: "1986",
      },
      {
        id: 10,
        term: "Đại hội VI",
        definition:
          "Đại hội VI của Đảng năm 1986 mở ra thời kỳ đổi mới đất nước.",
        quiz: {
          question: "Đại hội nào của Đảng mở ra công cuộc đổi mới?",
          options: ["Đại hội III", "Đại hội IV", "Đại hội VI", "Đại hội VIII"],
          correct: 2,
        },
        fillAnswer: "Đại hội mở ra công cuộc đổi mới là Đại hội ______",
        answer: "VI",
      },
      {
        id: 11,
        term: "Mục tiêu của Đảng",
        definition:
          "Đảng Cộng sản Việt Nam phấn đấu vì độc lập dân tộc gắn liền với chủ nghĩa xã hội.",
        quiz: {
          question: "Mục tiêu cơ bản của Đảng Cộng sản Việt Nam là gì?",
          options: [
            "Chỉ phát triển kinh tế",
            "Độc lập dân tộc gắn liền với chủ nghĩa xã hội",
            "Chỉ xây dựng quân đội",
            "Chỉ mở rộng ngoại giao",
          ],
          correct: 1,
        },
        fillAnswer:
          "Mục tiêu cơ bản của Đảng là độc lập dân tộc gắn liền với ______",
        answer: "chủ nghĩa xã hội",
      },
      {
        id: 12,
        term: "Bản chất giai cấp của Đảng",
        definition:
          "Đảng Cộng sản Việt Nam là đội tiên phong của giai cấp công nhân, đồng thời là đội tiên phong của dân tộc Việt Nam.",
        quiz: {
          question:
            "Đảng Cộng sản Việt Nam là đội tiên phong của giai cấp nào?",
          options: ["Địa chủ", "Tư sản", "Công nhân", "Tiểu thương"],
          correct: 2,
        },
        fillAnswer: "Đảng là đội tiên phong của giai cấp ______",
        answer: "công nhân",
      },
      {
        id: 13,
        term: "Đảng gắn bó với nhân dân",
        definition:
          "Sức mạnh của Đảng bắt nguồn từ sự gắn bó mật thiết với nhân dân.",
        quiz: {
          question: "Sức mạnh của Đảng bắt nguồn chủ yếu từ đâu?",
          options: [
            "Tài chính",
            "Vũ khí",
            "Sự gắn bó với nhân dân",
            "Viện trợ quốc tế",
          ],
          correct: 2,
        },
        fillAnswer: "Sức mạnh của Đảng bắt nguồn từ sự gắn bó với ______",
        answer: "nhân dân",
      },
      {
        id: 14,
        term: "Nguyên tắc tổ chức của Đảng",
        definition:
          "Đảng tổ chức và hoạt động theo nguyên tắc tập trung dân chủ.",
        quiz: {
          question: "Nguyên tắc tổ chức cơ bản của Đảng là gì?",
          options: [
            "Tự do tuyệt đối",
            "Tập trung dân chủ",
            "Quân chủ lập hiến",
            "Tam quyền phân lập",
          ],
          correct: 1,
        },
        fillAnswer: "Nguyên tắc tổ chức cơ bản của Đảng là ______",
        answer: "tập trung dân chủ",
      },
      {
        id: 15,
        term: "Vai trò lãnh đạo toàn diện",
        definition: "Đảng giữ vai trò lãnh đạo Nhà nước và xã hội.",
        quiz: {
          question:
            "Đảng Cộng sản Việt Nam giữ vai trò gì trong hệ thống chính trị?",
          options: [
            "Chỉ tư vấn",
            "Lãnh đạo Nhà nước và xã hội",
            "Chỉ phụ trách giáo dục",
            "Không giữ vai trò nào",
          ],
          correct: 1,
        },
        fillAnswer: "Đảng lãnh đạo ______ và xã hội",
        answer: "Nhà nước",
      },
      {
        id: 16,
        term: "Bài học về sự lãnh đạo đúng đắn",
        definition:
          "Thực tiễn cách mạng Việt Nam khẳng định vai trò quyết định của sự lãnh đạo đúng đắn của Đảng.",
        quiz: {
          question: "Thực tiễn cách mạng Việt Nam khẳng định điều gì?",
          options: [
            "Vai trò quyết định của sự lãnh đạo đúng đắn của Đảng",
            "Vai trò của địa chủ phong kiến",
            "Vai trò của tư sản mại bản",
            "Vai trò của chiến tranh thương mại",
          ],
          correct: 0,
        },
        fillAnswer:
          "Thực tiễn cách mạng khẳng định vai trò quyết định của sự lãnh đạo đúng đắn của ______",
        answer: "Đảng",
      },
      {
        id: 17,
        term: "Sự nghiệp xây dựng và bảo vệ Tổ quốc",
        definition:
          "Đảng tiếp tục lãnh đạo nhân dân xây dựng và bảo vệ vững chắc Tổ quốc Việt Nam xã hội chủ nghĩa.",
        quiz: {
          question: "Hiện nay, Đảng lãnh đạo nhân dân thực hiện nhiệm vụ nào?",
          options: [
            "Chỉ phát triển thể thao",
            "Xây dựng và bảo vệ Tổ quốc",
            "Chỉ phát triển du lịch",
            "Chỉ mở rộng đô thị",
          ],
          correct: 1,
        },
        fillAnswer: "Đảng lãnh đạo nhân dân xây dựng và ______ Tổ quốc",
        answer: "bảo vệ",
      },
      {
        id: 18,
        term: "Ý nghĩa thành lập Đảng đối với dân tộc",
        definition:
          "Sự ra đời của Đảng mở ra bước ngoặt căn bản cho cách mạng Việt Nam và dân tộc Việt Nam.",
        quiz: {
          question: "Sự ra đời của Đảng mở ra điều gì cho dân tộc Việt Nam?",
          options: [
            "Bước ngoặt căn bản của cách mạng Việt Nam",
            "Thời kỳ phong kiến mới",
            "Sự chia cắt lâu dài",
            "Khủng hoảng không lối thoát",
          ],
          correct: 0,
        },
        fillAnswer:
          "Sự ra đời của Đảng mở ra ______ căn bản cho cách mạng Việt Nam",
        answer: "bước ngoặt",
      },
      {
        id: 19,
        term: "Niềm tin của nhân dân với Đảng",
        definition:
          "Nhân dân là nguồn sức mạnh và là cơ sở chính trị - xã hội vững chắc của Đảng.",
        quiz: {
          question: "Cơ sở chính trị - xã hội vững chắc của Đảng là ai?",
          options: [
            "Địa chủ",
            "Nhân dân",
            "Thương nhân nước ngoài",
            "Thực dân",
          ],
          correct: 1,
        },
        fillAnswer: "Cơ sở chính trị - xã hội vững chắc của Đảng là ______",
        answer: "nhân dân",
      },
      {
        id: 20,
        term: "Trách nhiệm thế hệ trẻ",
        definition:
          "Thế hệ trẻ có trách nhiệm học tập, rèn luyện và góp phần xây dựng, bảo vệ Tổ quốc dưới sự lãnh đạo của Đảng.",
        quiz: {
          question:
            "Thế hệ trẻ cần làm gì để góp phần tiếp nối truyền thống của Đảng?",
          options: [
            "Thờ ơ với đất nước",
            "Học tập, rèn luyện và cống hiến",
            "Chỉ quan tâm lợi ích cá nhân",
            "Từ bỏ trách nhiệm xã hội",
          ],
          correct: 1,
        },
        fillAnswer: "Thế hệ trẻ cần học tập, rèn luyện và ______",
        answer: "cống hiến",
      },
    ],
  },
];
