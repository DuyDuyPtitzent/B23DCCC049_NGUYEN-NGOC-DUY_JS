import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; 
import "swiper/css"; // Import CSS cơ bản
import "swiper/css/autoplay"; // Import CSS cho Autoplay
import SwiperCore, { Autoplay } from "swiper";

// Cấu hình module
SwiperCore.use([Autoplay]);
function TrangChuContent() {
    const books = [
        { id: 1, title: 'Vững bước trên con đường đổi mới ', price: 4900000 },
        { id: 2, title: 'Chuẩn bị thật tốt đại hội đảng bộ các cấp tiến tới đại hội đại biểu toàn quốc lần thú XIII của Đảng', price: 1900000 },
        { id: 3, title: 'Vững tin vào sự lãnh đạo của Đảng', price: 290000 },
        { id: 4, title: 'Toàn Đảng toàn dân chung sức, đồng lòng xây dựng đất nước ta ngày càng phồn vinh hạnh phúc', price: 1190000 },
        { id: 5, title: 'Đoàn kết vững tin đưa đất nước bước vào giai đoạn mới ', price: 1190000 },
        { id: 6, title: 'Một số vấn đề lý luận và thực tiễn về chủ nghĩa xã hội và con đường đi lên chủ nghĩa xã hội ở Việt Nam ', price: 15590000 },
        { id: 7, title: 'Kiên quết, kiên trì đấu tranh phòng, chống tham nhũng, tiêu cực, góp phần xây dựng Đảng và nhà nước ta ngày càng trong sạch, vững mạnh', price: 1190000 },
        { id: 8, title: 'Cả nước đồng lòng, tranh thủ mọi thời cơ vượt qua mọi khó khăn thách thức, quyết tâm thực hiện thắng lợi nghị quyết Đại hội XIII của Đảng ', price: 1190000 },
        { id: 9, title: 'Xây dựng và phát triển nền đối ngoại, ngoại giao Việt Nam toàn diện, hiện đại, mang đậm bản sắc "Cây tre Việt Nam"', price: 1190000 },
        { id: 10, title: 'Tự hào và tin tưởng dưới lá cờ vẻ vang của Đảng quyết tâm xây dựng một nước Việt Nam ngày càng giàu mạnh, văn minh, văn hiến và anh hùng', price: 1190000 },
        { id: 11, title: 'Quốc hội trong tiến trình đổi mới đáp ứng yêu cầu xây dựng, hoàn thiện nhà nước pháp quyền xã hội chủ nghĩa Việt Nam ', price: 1190000 },
        { id: 12, title: 'Xây dựng và phát triển nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc', price: 570000 },
        { id: 13, title: 'Biến thách thức thành cơ hội quyết tạo tạo đột phá đưa đất nước phát triển nhanh và bền vững', price: 900000 },
        { id: 14, title: 'Xây dựng Đảng và hệ thống chính trị trong sạch, vững mạnh góp phần thực hiện thắng lợi nghị quyết Đại hội XIII của Đảng', price: 470000 },
        { id: 15, title: 'Một số vấn đề cần được đặc biệt quan tâm trong công tác chuẩn bị nhân sự Đại hội XIV của Đảng', price: 960000 },
        { id: 16, title: 'Kế thừa, phát huy truyền thống dân tộc, tư tưởng ngoại giao HỒ Chí Minh, quyết tâm xây dựng và phát triển nền đối ngoại, ngoại giao', price: 1190000 },
        { id: 17, title: 'Gương cao ngọn cờ đại đoàn kết dân tộc, phát huy truyền thống yêu nước, vai trò nòng cốt chính trị của mặt trận Tổ quốc Việt Nam, quyết tâm xây dựng đất nước ta ngày càng giàu mạnh phồn vinh , văn minh, hạnh phúc', price: 1190000 },
        { id: 18, title: 'Cac mối quan hệ lớn cần được giải quyết tốt trong quá trình đổi mới đi lên chủ nghĩa xã hội ở nước ta ', price: 370000 },
        { id: 19, title: 'Cương lĩnh chính trị ngọn cờ tư tưởng lý luận chỉ đạo sự nghiệp cách mạng của chúng ta', price: 580000 },
        { id: 20, title: 'Phát huy dân chủ, tiếp tục xây dựng nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân ', price: 100000 },
        { id: 21, title:'Vietnam from 1986', price: 200000 },
        { id: 23, title: 'Quyết tâm ngăn chặn và đẩy lùi tham nhũng', price: 800000 },
        { id: 24, title: 'Đấu tranh phòng chống tham những tiêu cực, một việc làm cần thiết, tất yếu; một xu thế không thể đảo ngược', price: 750000 },
        { id: 25, title: 'Vững bước trên con đường đã chọn', price: 1800000 },
        { id: 26, title: 'Vì một nền văn hóa Việt Nam dân tộc, hiện đại', price: 1190000 },
        { id: 27, title: 'Đảng cộng sản Việt Nam trong tiến trình đổi mới đất nước', price: 22190000 },
        { id: 28, title: 'Vững bước trên con đường đổi mới (Tập 3)', price: 1190000 },
        { id: 29, title: 'Vững bước trên con đường đổi mới (Tập 4)', price: 850000 },
        { id: 32, title: 'Luận cứ khoa học cho việc nâng cao chất lượng đội ngũ cán bộ trong thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước', price: 1190000 },
        { id: 33, title: 'Nâng cao năng lực lãnh đạo và sức chiến đấu của Đảng trong thời kỳ mới', price: 4700000 },
        { id: 34, title: 'Renewal in Việt Nam ', price: 1190000 },
        { id: 35, title: 'Quyết tâm cao biện pháp quyết liệt nhằm tạo chuyển biến mới về xây dựng Đảng', price: 1190000 },
        { id: 36, title: 'Xây dựng chỉnh đốn Đảng là nhiệm vụ then chốt để phát triển đất nước ', price: 3090000 },
        { id: 37, title: 'Nghiên cứu nghị quyết hội nghị đại biểu toàn quốc giữa nhiệm kỳ của Đảng', price: 9000000 },
        { id: 38, title: 'Phát huy hào khí Thăng Long - Hà Nội xây dựng thủ đô ngày càng giàu đẹp, văn minh, hiện đại', price: 1190000 },
        { id: 39, title: 'Sự lãnh đạo và hoạt động của Đảng trong điều kiện cơ cấu thị trường', price: 200000 },
        { id: 40, title: 'Đảng lãnh đạo, nhà nước quản lý, nhân dân làm chủ', price: 650000 },
        { id: 41, title: 'Teoria epratica delsocialismo in vietnam', price: 2050000 },
        
       
      ];
    
      const handleBuyBook = (book) => {
        const bookDetails = {
          id: book.id,
          title: book.title,
          price: book.price,
          quantity: 1,
        };
        localStorage.setItem("selectedBook", JSON.stringify(bookDetails));
        window.location.href = "/Thanhtoan"; // Điều hướng đến trang thanh toán
      };
  return (
    <div className="Trangchu-Background">
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-sm-1 anhQuangCao1"></div>
            <div className="col-sm-10">
              <Swiper
                modules={[Autoplay]} // Kích hoạt module Autoplay
                spaceBetween={50} // Khoảng cách giữa các slide
                slidesPerView={1} // Hiển thị 1 slide mỗi lần
                loop={true} // Cho phép lặp lại
                autoplay={{
                  delay: 3000, // Chuyển slide sau mỗi 3 giây
                  disableOnInteraction: false, // Không tắt autoplay khi người dùng tương tác
                }}
              >
                <SwiperSlide>
                  <div className="slide">
                    <img src="images/cs.png" alt="slide1" />
                   
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="images/phatbieu.jpg" alt="slide2" />
                    
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="images/cs2.jpg" alt="slide3" />
                    
                    
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="images/cs3.jpg" alt="slide3" />
                    
                    
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="images/cs4.jpg" alt="slide3" />
                    
                    
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="slide">
                    <img src="images/cs5.jpg" alt="slide3" />
                    
                    
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-sm-1 anhQuangCao2"></div>
          </div>
        </div>
      </section>
     <section className="recomended-sec">
                <div className="container">
                    <div className="title">
                        <h2>sách nổi bật</h2>
                        
                    </div>
                    
                    <div className="row">
                    {books.slice(0, 4).map((book) => (
                        <div key={book.id} className="col-lg-3 col-md-12">
                            <div className="items">
                                <img src={`images/Thumb (${book.id}).png`} alt={book.title} />
                                <h3>{book.title}</h3>
                                <h6>
                                    <span className="price">{book.price}đ</span>  
                                    <button 
                                    className="buys"
                                    onClick={() => handleBuyBook(book)}>Mua</button>
                                </h6> 

            <div className="hover">
                                
                                        <span><i className="fa fa-long-arrow-right" aria-hidden="true"></i></span>
                                </div>
                                  
                                </div>

                                </div>
))} 
          </div>
          <div className="btn-sec butXemNB">
            <a href="DanhMucSanPham.html" className="btn butDanhMucSach">
              Xem Thêm
            </a>
          </div>
        </div>
      </section>

            <section>
                <div className="container anhGTTrangChu">
                    <div className="row">
                        <div className="col-sm-5">
                            <img src="images/HVCCQGHCM.png" alt="img" style={{ width: '100%' }} id="anhgioiThieuHome" />
                        </div>
                        <div className="col-sm-7">
                            <div className="gioiThieu">
                                <h3>Giới thiệu Học viện Chính trị Quốc gia Hồ Chí Minh và Nhà xuất bản Chính trị Quốc gia Sự thật:</h3>
                                <p>
                                Học viện Chính trị Quốc gia Hồ Chí Minh là cơ sở đào tạo cao cấp, nghiên cứu khoa học và bồi dưỡng lý luận chính trị hàng đầu của Đảng Cộng sản Việt Nam.
                                 Với mục tiêu đào tạo, bồi dưỡng cán bộ lãnh đạo, quản lý và nghiên cứu lý luận chính trị,
                                  học viện đã đóng góp quan trọng trong việc xây dựng đội ngũ cán bộ có trình độ lý luận chính trị vững vàng, nắm vững lý tưởng cộng sản và phục vụ sự nghiệp
                                   cách mạng của đất nước.
                                </p>
                                <p>
                                    Nhà xuất bản Chính trị Quốc gia Sự thật là cơ quan xuất bản chuyên ngành, trực thuộc Học viện Chính trị Quốc gia Hồ Chí Minh. Nhà xuất 
                                    bản này chuyên xuất bản các ấn phẩm phục vụ công tác nghiên cứu, giáo dục lý luận chính trị, tư tưởng Hồ Chí Minh, cũng như các tài liệu học 
                                    tập cho cán bộ, đảng viên và quần chúng nhân dân. Các ấn phẩm của nhà xuất bản không chỉ góp phần vào việc phổ biến kiến thức chính trị 
                                    mà còn đóng vai trò quan trọng trong việc đào tạo, bồi dưỡng nhận thức chính trị cho các thế hệ cán bộ, đảng viên.
                                </p>
                                
                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </section>
            <section className="recent-book-sec">
    <div className="container">
        <div className="title">
            <h2>Sách dành cho cán bộ học tập tại Học Viện Chính Trị Quốc Gia Hồ Chí Minh</h2>
            <hr />
        </div>
        <div className="row">
            {books.map((book) => (
                <div key={book.id} className="col-lg-2 col-md-10">
                    <div className="item">
                        <img src={`images/Thumb (${book.id}).png`} alt={book.title} />
                        <h3>{book.title}</h3>
                        <h6>
                            <span className="price">{book.price}đ</span> 
                            <br /><span className="description">Nguyễn Phú Trọng</span>
                            <button 
                            className="buy"
                            onClick={() => handleBuyBook(book)}>Mua</button>
                        </h6>
                    </div>
                </div>
            ))}
        </div>
        <div className="btn-sec butXemNB">
            <a href="DanhMucSanPham.html" className="btn butDanhMucSach">
                Xem Thêm
            </a>
        </div>
    </div>
</section>

            <section className="testimonial-sec">
            <div className="container">
                <div id="testimonal" className="swiper-container">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        autoplay={{
                            delay: 3000, // Thời gian chuyển slide (ms)
                            disableOnInteraction: false, // Tiếp tục autoplay sau khi người dùng tương tác
                        }}
                        loop={true} // Lặp lại các slide
                    >
                        <SwiperSlide>
                            <h3>
                                "Người Việt Nam thà chết chứ không chịu mất nước."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">Chủ tịch Hồ Chí Minh</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3>
                                "Lò đã nóng thì củi tươi cũng cháy."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">Cố Tổng bí thư Nguyễn Phú Trọng</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                                
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3>
                             "Từ 'lo sợ' không có trong tư duy quân sự của Việt Nam."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">Đại tướng Võ Nguyên Giáp</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                            
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3>
                                "Người Mỹ có thể lên mặt trăng và trở về an toàn. Nhưng sang Việt Nam tôi không chắc."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">Nguyễn Thị Bình</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <h3>
                                "Tao chỉ biết đứng không biết quỳ."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">AHLLVTND Võ Thị Sáu</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <h3>
                                "Tao đã quỳ nửa đời người rồi, đã đứng lên được thì không quỳ xuống nữa."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">Đồng chí Ba Thuận</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <h3>
                                "Việc này tao lãnh đạo, tao chủ trương, tao làm.."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">Nguyễn Thị Minh Khai</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                            </div>
                        </SwiperSlide><SwiperSlide>
                            <h3>
                                "Bao giờ người Tây nhỏ hết cỏ nước Nam mới hết người Nam đánh Tây."
                            </h3>
                            <div className="box-user">
                                <h4 className="author">Nguyễn Trung Trực</h4>
                                <span className="country">Đảng Cộng sản Việt Nam Quang Vinh Muôn Năm</span>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                    <div className="left-quote">
                        <img src="images/left-quote.png" alt="quote" />
                    </div>
                    <div className="right-quote">
                        <img src="images/right-quote.png" alt="quote" />
                    </div>
                    </div>
                </section>      
            </div>
   
  );
}

export default TrangChuContent;
