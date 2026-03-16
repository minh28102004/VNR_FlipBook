// src/StoryBook/partyFormationSpreads.jsx
import React from "react";
import AutoFitPage from "./AutoFitPage";
import Coverbook from "../../assets/picture/Coverbook.png";

/**
 * Mỗi phần tử là 1 "spread" (cặp trang): { left: JSX|null, right: JSX|null }
 * Dùng AutoFitPage để nội dung tự scale vừa chiều cao page, không cuộn.
 * Nội dung: Sự ra đời của Đảng Cộng sản Việt Nam
 */
export const spreads = [
  // ============ Spread 0: Bìa trước ============

  {
    left: null,
    right: (
      <AutoFitPage
        className="cover-front"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, rgba(220,38,38,.15) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, rgba(185,28,28,.12) 0%, transparent 40%),
            url(${Coverbook}) center / cover no-repeat,
            linear-gradient(135deg, #0a0a14 0%, #1a1a2e 50%, #0f0f1a 100%)
          `,
        }}
      >
        <div className="cover-design">
          <div className="cover-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
            <div className="star star-4" />
            <div className="star star-5" />
          </div>

          <div className="cover-ornament top" />

          <div className="cover-title">
            <div className="title-backdrop" />
            <h1 className="main-title">
              <span className="title-line-1">SỰ RA ĐỜI CỦA</span>
              <span className="title-line-2">ĐẢNG CỘNG SẢN</span>
              <span className="title-line-3">VIỆT NAM</span>
            </h1>
            <div className="subtitle">
              Từ khởi nghĩa Yên Thế đến Đại hội thành lập 3/2/1930
            </div>
          </div>

          <div className="cover-quote">
            <div className="quote-marks">"</div>
            <div className="quote-text">
              Không có gì quý hơn độc lập, tự do
            </div>
            <div className="quote-author">— Hồ Chí Minh</div>
            <div className="quote-marks closing">"</div>
          </div>

          <div className="cover-date">
            <span>03/02/1930</span>
          </div>

          <div className="cover-ornament bottom" />
          <div className="cover-glow" />
        </div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 1: Dẫn nhập ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Dẫn nhập</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Vì sao nghiên cứu sự ra đời của Đảng?</h3>
          <p className="first-letter">
            Sự ra đời của Đảng Cộng sản Việt Nam là sự kiện lịch sử trọng đại,
            đánh dấu bước ngoặt vĩ đại trong lịch sử cách mạng Việt Nam.
            Hiểu được quá trình này giúp chúng ta nắm vững bài học về sự lãnh đạo
            của Đảng và phát huy truyền thống yêu nước, cách mạng của dân tộc.
          </p>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>
              "Đảng là người lãnh đạo, là người tổ chức, là người giáo dục quần chúng."
            </p>
            <div className="quote-author">— Hồ Chí Minh</div>
          </div>
        </div>

        <div className="page-number">2</div>
      </AutoFitPage>
    ),
    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Mục tiêu học tập</h4>
          <div className="principle">
            <span className="principle-icon">🎯</span>
            <div>
              <strong>Nắm bối cảnh:</strong> lịch sử trước khi Đảng ra đời.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div>
              <strong>Hiểu vai trò:</strong> của Nguyễn Ái Quốc trong việc chuẩn bị thành lập Đảng.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">🔎</span>
            <div>
              <strong>Biết quá trình:</strong> hình thành và thống nhất các tổ chức cộng sản.
            </div>
          </div>
          <div className="principle">
            <span className="principle-icon">📚</span>
            <div>
              <strong>Ý nghĩa lịch sử:</strong> của sự ra đời Đảng.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Từ khóa</div>
          <p>
            Thực dân Pháp • Khủng hoảng đường lối • Nguyễn Ái Quốc
            • Chủ nghĩa Mác-Lênin • Hội Việt Nam Cách mạng Thanh niên
            • Đông Dương Cộng sản Đảng • Hội nghị thành lập Đảng 3/2/1930
          </p>
        </div>

        <div className="page-number">3</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 2: CHƯƠNG I - Bối cảnh ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương I</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Bối cảnh lịch sử trước khi Đảng ra đời</h3>
          <p className="first-letter">
            Để hiểu sự ra đời của Đảng Cộng sản Việt Nam, trước hết cần nắm vững
            bối cảnh lịch sử của đất nước ta vào cuối thế kỷ XIX - đầu thế kỷ XX.
          </p>

          <div className="wisdom-section">
            <h4>1. Việt Nam dưới ách thống trị Pháp</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>1858:</strong> Pháp tấn công Đà Nẵng
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>1862:</strong> Pháp chiếm Nam Kỳ
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>1884:</strong> Pháp thiết lập quyền bảo hộ toàn bộ Việt Nam
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>1887:</strong> Thành lập Liên bang Đông Dương
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">4</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Chính sách bóc lột của thực dân Pháp</h4>

          <div className="principle">
            <span className="principle-icon">💰</span>
            <div>
              <strong>Kinh tế:</strong> Cướp đất lập đồn điền, khai thác mỏ, tăng thuế nặng nề, độc quyền muối và rượu.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">⚔️</span>
            <div>
              <strong>Chính trị:</strong> Đàn áp phong trào yêu nước, tước bỏ quyền tự do, thiết lập bộ máy cai trị chặt chẽ.
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">📖</span>
            <div>
              <strong>Văn hóa - Xã hội:</strong> Chính sách ngu dân, hạn chế giáo dục, đồng hóa dân tộc.
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Hậu quả</div>
          <p>
            • Đời sống nhân dân vô cùng khó khăn<br />
            • Mâu thuẫn giữa nhân dân Việt Nam và thực dân Pháp ngày càng gay gắt
          </p>
        </div>

        <div className="page-number">5</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 3: CHƯƠNG I (tiếp) - Phân hóa giai cấp ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương I</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Sự phân hóa giai cấp trong xã hội</h3>

          <div className="wisdom-section">
            <h4>Các giai cấp và tầng lớp mới</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Giai cấp công nhân:</strong> Hình thành trong các nhà máy, hầm mỏ do Pháp xây dựng.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Giai cấp tư sản:</strong> Một bộ phận nhỏ làm kinh doanh nhưng bị tư bản Pháp chèn ép.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Tầng lớp tiểu tư sản:</strong> Gồm trí thức, học sinh, viên chức.
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                <strong>Nông dân:</strong> Chiếm đa số dân số nhưng bị bóc lột nặng nề.
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">6</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Các phong trào yêu nước chống Pháp</h4>

          <div className="principle">
            <span className="principle-icon">⚔️</span>
            <div>
              <strong>Phong trào Cần Vương</strong> (1885-1896) - Lãnh đạo: Tôn Thất Thuyết
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🏔️</span>
            <div>
              <strong>Khởi nghĩa Yên Thế</strong> (1885-1913) - Lãnh đạo: Hoàng Hoa Thám
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">📚</span>
            <div>
              <strong>Phong trào Đông Du</strong> (1905-1909) - Khởi xướng: Phan Bội Châu
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">✍️</span>
            <div>
              <strong>Phong trào Duy Tân</strong> (1906-1908) - Lãnh đạo: Phan Châu Trinh
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Hạn chế của các phong trào</div>
          <p>
            • Thiếu đường lối cách mạng đúng đắn<br />
            • Thiếu tổ chức lãnh đạo thống nhất<br />
            • Chưa tập hợp được đông đảo quần chúng
          </p>
        </div>

        <div className="page-number">7</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 4: CHƯƠNG II - Vai trò Nguyễn Ái Quốc ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương II</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Vai trò của Nguyễn Ái Quốc</h3>
          <p className="first-letter">
            Nguyễn Ái Quốc (Hồ Chí Minh) là người sáng lập và lãnh đạo Đảng Cộng sản Việt Nam.
            Hành trình tìm đường cứu nước của Người là một quá trình dài đầy gian khổ.
          </p>

          <div className="wisdom-section">
            <h4>1. Hành trình tìm đường cứu nước</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>5/6/1911:</strong> Nguyễn Ái Quốc rời bến cảng Nhà Rồng (Sài Gòn) để ra nước ngoài
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                Đi qua nhiều quốc gia ở châu Âu, châu Phi và châu Mỹ
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                Nghiên cứu các phong trào cách mạng trên thế giới
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">8</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>2. Tiếp cận chủ nghĩa Mác - Lênin</h4>

          <div className="principle">
            <span className="principle-icon">📖</span>
            <div>
              <strong>Năm 1920:</strong> Tham gia Đại hội Đảng Cộng sản Pháp tại Tours
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">📜</span>
            <div>
              <strong>Đọc Luận cương</strong> về vấn đề dân tộc và thuộc địa của Lenin
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Phát hiện quan trọng</div>
          <p>
            • Chủ nghĩa Mác-Lênin là con đường đúng đắn<br />
            • Cách mạng Việt Nam cần đi theo con đường cách mạng vô sản<br />
            • Giải phóng dân tộc gắn liền với giải phóng giai cấp công nhân
          </p>
        </div>

        <div className="page-number">9</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 5: CHƯƠNG II (tiếp) - Truyền bá tư tưởng ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương II</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>3. Truyền bá tư tưởng cách mạng</h3>

          <div className="wisdom-section">
            <h4>Thành lập Hội Việt Nam Cách mạng Thanh niên</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>Năm 1925:</strong> Tại Quảng Châu (Trung Quốc)
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                <strong>Mục tiêu:</strong> Đào tạo cán bộ cách mạng
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                Truyền bá chủ nghĩa Mác-Lênin vào Việt Nam
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div>
                Chuẩn bị cho việc thành lập Đảng Cộng sản
              </div>
            </div>
          </div>

          <div className="philosophy-quote">
            <div className="quote-symbol">❝</div>
            <p>"Đường Kách Mệnh" - Tài liệu quan trọng năm 1925</p>
          </div>
        </div>

        <div className="page-number">10</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>4. Chuẩn bị cho sự ra đời của Đảng</h4>

          <div className="principle">
            <span className="principle-icon">🧠</span>
            <div>
              <strong>Truyền bá tư tưởng:</strong> Đưa chủ nghĩa Mác-Lênin vào Việt Nam
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">👥</span>
            <div>
              <strong>Đào tạo cán bộ:</strong> Thông qua Hội Việt Nam Cách mạng Thanh niên
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🏛️</span>
            <div>
              <strong>Chuẩn bị tổ chức:</strong> Về tư tưởng, chính trị và tổ chức
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Kết quả</div>
          <p>
            Phong trào cách mạng Việt Nam ngày càng phát triển mạnh mẽ,
            tạo tiền đề cho sự ra đời của Đảng Cộng sản Việt Nam năm 1930.
          </p>
        </div>

        <div className="page-number">11</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 6: CHƯƠNG III & IV ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương III</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Chuẩn bị về tư tưởng và tổ chức</h3>

          <div className="wisdom-section">
            <h4>Hội Việt Nam Cách mạng Thanh niên (1925)</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Đào tạo cán bộ cách mạng</strong> - Nền tảng lực lượng cho Đảng
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Truyền bá chủ nghĩa Mác-Lênin</strong> - Vũ khí lý luận cho cách mạng
              </div>
            </div>
          </div>

          <div className="wisdom-section">
            <h4>Các tài liệu quan trọng</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div><strong>Đường Kách Mệnh</strong> (1925) - Đường lối cách mạng vô sản</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">•</span>
              <div><strong>Chính cương</strong> (1929) - Định hướng chính trị</div>
            </div>
          </div>
        </div>

        <div className="page-number">12</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="page-header">
          <h2>Chương IV</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Sự xuất hiện các tổ chức cộng sản</h3>

          <div className="wisdom-section">
            <h4>Ba tổ chức cộng sản năm 1929</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                <strong>Đông Dương Cộng sản Đảng</strong>
                <br />Năm 1929, hoạt động ở Bắc Kỳ
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>An Nam Cộng sản Đảng</strong>
                <br />Năm 1929, hoạt động ở Trung Kỳ
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                <strong>Đông Dương Cộng sản Liên đoàn</strong>
                <br />Năm 1929, hoạt động ở Sài Gòn
              </div>
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Vấn đề đặt ra</div>
          <p>
            Các tổ chức hoạt động riêng rẽ, có sự tranh chấp ảnh hưởng →
            <strong> Cần thống nhất thành một đảng duy nhất</strong>
          </p>
        </div>

        <div className="page-number">13</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 7: CHƯƠNG V - Hội nghị thành lập ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương V</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Hội nghị thành lập Đảng</h3>

          <div className="wisdom-section">
            <h4>Thông tin Hội nghị</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">📅</span>
              <div>
                <strong>Thời gian:</strong> Tháng 2/1930
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">📍</span>
              <div>
                <strong>Địa điểm:</strong> Hồng Kông
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">👤</span>
              <div>
                <strong>Người triệu tập:</strong> Nguyễn Ái Quốc
              </div>
            </div>
          </div>

          <div className="wisdom-section">
            <h4>Các tổ chức tham gia</h4>
            <div className="wisdom-item">
              <span className="wisdom-number">✓</span>
              <div>Đông Dương Cộng sản Đảng</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">✓</span>
              <div>An Nam Cộng sản Đảng</div>
            </div>
            <div className="wisdom-item">
              <span className="wisdom-number">✓</span>
              <div>Đông Dương Cộng sản Liên đoàn</div>
            </div>
          </div>
        </div>

        <div className="page-number">14</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Các văn kiện được thông qua</h4>

          <div className="principle">
            <span className="principle-icon">📄</span>
            <div>
              <strong>Chánh cương vắn tắt</strong>
              <br />Xác định mục tiêu, nhiệm vụ của Đảng
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">📋</span>
            <div>
              <strong>Sách lược vắn tắt</strong>
              <br />Đường lối chiến lược trong từng giai đoạn
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">⚖️</span>
            <div>
              <strong>Điều lệ tắt của Đảng</strong>
              <br />Quy định về tổ chức và nguyên tắc hoạt động
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Mục tiêu của Đảng</div>
          <p>
            ✅ Giải phóng dân tộc
            <br />✅ Đánh đổ đế quốc (thực dân Pháp)
            <br />✅ Đánh đổ phong kiến
            <br />✅ Xây dựng chủ nghĩa xã hội
          </p>
        </div>

        <div className="page-number">15</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 8: CHƯƠNG VI - Ý nghĩa lịch sử ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Chương VI</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Ý nghĩa lịch sử</h3>

          <div className="wisdom-section">
            <h4>Ý nghĩa to lớn của sự ra đời Đảng</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">🏁</span>
              <div>
                <strong>Chấm dứt khủng hoảng</strong> về đường lối và tổ chức lãnh đạo cách mạng
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">🔄</span>
              <div>
                <strong>Bước ngoặt lịch sử</strong> trong lịch sử cách mạng Việt Nam
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">🏛️</span>
              <div>
                <strong>Tổ chức thống nhất</strong> - Cách mạng Việt Nam có một tổ chức lãnh đạo thống nhất
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">🏆</span>
              <div>
                <strong>Thắng lợi tiếp theo</strong> - Đảng đã lãnh đạo nhân dân đi đến nhiều thắng lợi quan trọng
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">16</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Thành tựu của Đảng sau khi thành lập</h4>

          <div className="principle">
            <span className="principle-icon">1945</span>
            <div>
              Thành lập Nước Việt Nam Dân chủ Cộng hòa
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">1946-1954</span>
            <div>
              Kháng chiến chống Pháp thắng lợi
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">1954-1975</span>
            <div>
              Kháng chiến chống Mỹ, giải phóng miền Nam
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">1975</span>
            <div>
              Thống nhất đất nước
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">1986-nay</span>
            <div>
              Đổi mới, xây dựng chủ nghĩa xã hội
            </div>
          </div>
        </div>

        <div className="page-number">17</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 9: Ôn tập ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Ôn tập</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Tóm tắt các chương</h3>

          <div className="wisdom-section">
            <h4>Bảng nhớ nhanh</h4>

            <div className="wisdom-item">
              <span className="wisdom-number">I</span>
              <div>
                <strong>Bối cảnh lịch sử:</strong> Thực dân Pháp, phân hóa giai cấp, các phong trào yêu nước thất bại
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">II</span>
              <div>
                <strong>Vai trò Nguyễn Ái Quốc:</strong> Ra đi tìm đường, tiếp cận CN Mác-Lênin, truyền bá tư tưởng
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">III</span>
              <div>
                <strong>Chuẩn bị:</strong> Hội Việt Nam Cách mạng Thanh niên 1925
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">IV</span>
              <div>
                <strong>Ba tổ chức cộng sản 1929:</strong> Đông Dương CSĐ, An Nam CSĐ, Đông Dương CSLiên đoàn
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">V</span>
              <div>
                <strong>Hội nghị thành lập:</strong> 2/1930 tại Hồng Kông
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">VI</span>
              <div>
                <strong>Ý nghĩa lịch sử:</strong> Đánh dấu bước ngoặt vĩ đại
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">18</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Câu hỏi kiểm tra</h4>

          <div className="principle">
            <span className="principle-icon">🤔</span>
            <div>
              Vì sao các phong trào yêu nước đầu thế kỷ XX đều thất bại?
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div>
              Nguyễn Ái Quốc đã tìm ra con đường cứu nước như thế nào?
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">📚</span>
            <div>
              Quá trình thống nhất các tổ chức cộng sản diễn ra như thế nào?
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🎯</span>
            <div>
              Sự ra đời Đảng Cộng sản Việt Nam có ý nghĩa gì?
            </div>
          </div>
        </div>

        <div className="reflection-box">
          <div className="reflection-title">Câu hỏi thảo luận nhóm</div>
          <p>
            Theo bạn, đâu là yếu tố quan trọng nhất dẫn đến thành công của cách mạng Việt Nam?
            <br /><br />
            Bài học nào từ quá trình thành lập Đảng có thể áp dụng trong thời đại hiện nay?
          </p>
        </div>

        <div className="page-number">19</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 10: Tổng kết ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>Tổng kết</h2>
          <div className="chapter-ornament">❦</div>
        </div>

        <div className="page-body">
          <h3>Bài học chính</h3>

          <div className="wisdom-section">
            <div className="wisdom-item">
              <span className="wisdom-number">1</span>
              <div>
                Sự ra đời của Đảng là <strong>tất yếu lịch sử</strong>, đáp ứng yêu cầu của cách mạng Việt Nam
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">2</span>
              <div>
                <strong>Nguyễn Ái Quốc</strong> - người sáng lập Đảng với tầm nhìn chiến lược
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">3</span>
              <div>
                Kết hợp <strong>chủ nghĩa Mác-Lênin</strong> với phong trào công nhân và yêu nước
              </div>
            </div>

            <div className="wisdom-item">
              <span className="wisdom-number">4</span>
              <div>
                <strong>Đảng lãnh đạo</strong> là nhân tố quyết định thắng lợi của cách mạng
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">20</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="page-right">
        <div className="life-principles">
          <h4>Một phút suy ngẫm</h4>

          <div className="principle">
            <span className="principle-icon">🤔</span>
            <div>
              Bạn học được gì từ quá trình ra đời của Đảng Cộng sản Việt Nam?
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🧭</span>
            <div>
              Làm thế nào để phát huy truyền thống cách mạng trong thời đại hiện nay?
            </div>
          </div>

          <div className="principle">
            <span className="principle-icon">🏗️</span>
            <div>
              Bạn sẽ làm gì để đóng góp vào sự phát triển của đất nước?
            </div>
          </div>
        </div>

        <div className="page-number">21</div>
      </AutoFitPage>
    ),
  },

  // ============ Spread 11: Kết & Bìa sau ============

  {
    left: (
      <AutoFitPage className="page-left">
        <div className="final-content">
          <div className="conclusion-title">
            <h2>Kết</h2>
          </div>

          <div className="final-wisdom">
            <p>
              Sự ra đời của Đảng Cộng sản Việt Nam ngày 3/2/1930 là sự kiện lịch sử
              trọng đại, đánh dấu bước ngoặt vĩ đại trong lịch sử cách mạng Việt Nam.
              Từ đây, nhân dân Việt Nam có một tổ chức lãnh đạo thống nhất,
              với đường lối đúng đắn để đi đến độc lập, tự do và hạnh phúc.
            </p>

            <div className="life-summary">
              <div className="summary-item">
                <span className="summary-icon">🗓️</span>
                <p><strong>03/02/1930</strong></p>
                <p>Ngày thành lập Đảng</p>
              </div>

              <div className="summary-item">
                <span className="summary-icon">👤</span>
                <p><strong>Nguyễn Ái Quốc</strong></p>
                <p>Người sáng lập</p>
              </div>

              <div className="summary-item">
                <span className="summary-icon">📍</span>
                <p><strong>Hồng Kông</strong></p>
                <p>Địa điểm hội nghị</p>
              </div>
            </div>
          </div>
        </div>

        <div className="page-number">22</div>
      </AutoFitPage>
    ),

    right: (
      <AutoFitPage className="cover-back">
        <div className="back-cover-design">
          <div className="back-stars">
            <div className="star star-1" />
            <div className="star star-2" />
            <div className="star star-3" />
          </div>

          <div className="back-ornament top" />

          <div className="back-title">
            <div className="back-title-backdrop" />
            <h1>ĐẢNG CỘNG SẢN</h1>
            <h1>VIỆT NAM</h1>
            <div className="infinity-symbol">☭</div>
          </div>

          <div className="back-info">
            <p><strong>Ngày thành lập:</strong> 03/02/1930</p>
            <p><strong>Người sáng lập:</strong> Nguyễn Ái Quốc - Hồ Chí Minh</p>
          </div>

          <div className="back-quote">
            <div className="back-quote-text">
              "Đoàn kết, đoàn kết,
              <br />
              đại đoàn kết"
            </div>
            <div className="back-quote-divider" />
            <div className="back-quote-text">
              "Thành công, thành công,
              <br />
              đại thành công"
            </div>
          </div>

          <div className="back-message">
            Tiếp tục học tập &amp; phát huy
            <br />
            truyền thống cách mạng
          </div>

          <div className="back-ornament bottom" />
          <div className="back-glow" />
        </div>
      </AutoFitPage>
    ),
  },
];

/** Chuyển spreads -> mảng pages cho HTMLFlipBook (showCover=true)
 *  + Thêm 2 trang Mục lục (TOC-L & TOC-R) ngay sau cover-front (index = 1,2)
 *  + Nhận onTocClick để lật trang khi bấm mục lục
 */
export const spreadsToPages = (spreads, { onTocClick } = {}) => {
  const pages = [];

  // 0) Bìa trước = right của spread 0
  pages.push(
    <div className="page" key="cover-front">
      {spreads[0].right}
    </div>
  );

  // Mapping gốc (không TOC): left = 2*s - 1, right = 2*s (s>=1).
  // Sau khi có 2 trang TOC -> cộng +2 cho mọi trang nội dung.
  const OFFSET = 2;
  const idxFor = (spreadIndex, side = "left") => {
    if (spreadIndex <= 0) return 0; // cover
    const base = side === "left" ? 2 * spreadIndex - 1 : 2 * spreadIndex;
    return base + OFFSET;
  };

  // ====== MỤC LỤC CHI TIẾT ======
  const toc = [
    {
      label: "Dẫn nhập: Vì sao nghiên cứu sự ra đời của Đảng",
      s: 1,
      side: "left",
    },
    {
      label: "Chương I: Bối cảnh lịch sử trước khi Đảng ra đời",
      s: 2,
      side: "left",
    },
    {
      label: "Chương II: Vai trò của Nguyễn Ái Quốc",
      s: 3,
      side: "left",
    },
    {
      label: "Chương III: Chuẩn bị về tư tưởng và tổ chức",
      s: 5,
      side: "left",
    },
    {
      label: "Chương IV: Sự xuất hiện các tổ chức cộng sản",
      s: 5,
      side: "right",
    },
    {
      label: "Chương V: Hội nghị thành lập Đảng",
      s: 7,
      side: "left",
    },
    {
      label: "Chương VI: Ý nghĩa lịch sử",
      s: 8,
      side: "left",
    },
  ];

  // Chia TOC thành 2 trang cho đẹp
  const mid = Math.ceil(toc.length / 2);
  const tocLeft = toc.slice(0, mid);
  const tocRight = toc.slice(mid);

  const renderTocList = (items) => (
    <div className="wisdom-section">
      <h4>MỤC LỤC CHI TIẾT</h4>
      {items.map((item, i) => {
        const targetIdx = idxFor(item.s, item.side);
        const printedPage = 2 * item.s + (item.side === "right" ? 1 : 0);
        return (
          <div className="principle" key={`${item.label}-${i}`}>
            <span className="principle-icon">📖</span>
            <a
              href="#"
              className="toc-link"
              data-goto={targetIdx}
              title={`Tới trang ${printedPage}`}
              onClick={onTocClick}
            >
              <strong>{item.label}</strong>
              <span className="toc-page"> — tr. {printedPage}</span>
            </a>
          </div>
        );
      })}
    </div>
  );

  // 1) TOC-L (index = 1)
  pages.push(
    <div className="page" key="toc-L">
      <AutoFitPage className="page-left">
        <div className="page-header">
          <h2>MỤC LỤC CHI TIẾT</h2>
          <div className="chapter-ornament">❦</div>
        </div>
        <div className="page-body">{renderTocList(tocLeft)}</div>
      </AutoFitPage>
    </div>
  );

  // 2) TOC-R (index = 2)
  pages.push(
    <div className="page" key="toc-R">
      <AutoFitPage className="page-right">
        <div className="page-header">
          <h2>MỤC LỤC CHI TIẾT (tiếp)</h2>
          <div className="chapter-ornament">❦</div>
        </div>
        <div className="page-body">{renderTocList(tocRight)}</div>
      </AutoFitPage>
    </div>
  );

  // 3) Các spread sau: left rồi right (nếu có)
  for (let i = 1; i < spreads.length; i++) {
    const s = spreads[i];
    if (s.left) pages.push(<div className="page" key={`p-${i}-L`}>{s.left}</div>);
    if (s.right) pages.push(<div className="page" key={`p-${i}-R`}>{s.right}</div>);
  }

  return pages;
};
