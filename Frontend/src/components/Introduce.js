import chandung from './images/chandung.png';
import './Introduce.css';
import QH from './images/QH.png';

import tomtat from './images/tomtat.png';

function Introduce() {
  return (
    
    <div className="containers">
      <header className="headers">
        <h4>TIỂU SỬ</h4>
        <h2>Tổng Bí Thư </h2>
        <h3> Nguyễn Phú Trọng</h3>
      </header>
      <main className="main-content">
      <div className="titles-wrapper">
        <h3 className="title-1">Tiểu sử</h3>
        <h2 className="titles">và</h2>
        <h3 className="title-1">Quá trình công tác</h3>
        </div>
      <section className="bio">
      
        <div className="content">
            <div className="photo">
            <img src={chandung} alt="Nguyễn Phú Trọng" />
            </div>
            <ul className="details">
            <li>Họ và tên: Nguyễn Phú Trọng</li>
            <li>Ngày sinh: 14/4/1944</li>
            <li>Dân tộc: Kinh</li>
            <li>Quê quán: xã Đông Hội, huyện Đông Anh, thành phố Hà Nội</li>
            <li>Ngày vào Đảng: 19/12/1967; Ngày chính thức: 19/12/1968</li>
            <li>Học hàm, học vị: Giáo sư, Tiến sĩ chính trị học </li>
            <li>Lý luận chính trị: Cao cấp</li>
            <li>Ngoại ngữ: Tiếng Nga D, Tiếng Anh B</li>
            <li>Ủy viên Ban Chấp hành Trung ương Đảng khoá VII, VIII, IX, X, XI, XII, XIII</li>
            <li>Ủy viên Bộ Chính trị khoá VIII, IX, X, XI, XII, XIII</li>
            <li>Tổng Bí thư Ban Chấp hành Trung ương Đảng khóa XI, XII, XIII</li>
            <li>Đại biểu Quốc hội các khoá XI, XII, XIII, XIV, XV</li>
           
            </ul>
        </div>
        </section>
        <section>
          <div
            className="body-background"
            style={{
              backgroundImage: `url(${tomtat})`,
              backgroundSize: '23%',
              backgroundPosition: 'center 100%',
              backgroundRepeat: 'no-repeat',
              height: '9vh',
              margin: 30,
            }}
          ></div>
        </section>

       
        <section className="timelines">
                <div className="timeline-containers">
                    <div className="timeline-item">
                    <div className="timeline-date">12/1967</div>
                    <div className="timeline-content">
                        <p>Cán bộ Phòng Tư liệu Tạp chí Học tập 
                        "(nay là Tạp chí Cộng sản)"
                         Ngày 19/12/1967, đồng chí được kết nạp vào Đảng Cộng sản Việt Nam.</p>
                    </div>
                    </div>

                    <div className="timeline-item">
                    <div className="timeline-date">08/1968 - 08/1973</div>
                    <div className="timeline-content">
                        <p>Cán bộ biên tập Tạp chí Cộng sản; đi thực tế ở huyện Thanh Oai, tỉnh Hà Tây (nay là Hà Nội); Bí thư Chi đoàn Cơ quan Tạp chí Cộng sản.</p>
                    </div>
                    </div>

                    <div className="timeline-item">
                    <div className="timeline-date">09/1973 - 04/1976</div>
                    <div className="timeline-content">
                        <p>Nghiên cứu sinh Khoa Kinh tế - Chính trị tại Trường Đảng cao cấp Nguyễn Ái Quốc (nay là Học viện Chính trị quốc gia Hồ Chí Minh).</p>
                    </div>
                    </div>

                    <div className="timeline-item">
                    <div className="timeline-date">05/1976 - 08/1980</div>
                    <div className="timeline-content">
                        <p>Cán bộ biên tập. Ban Xây dựng Đảng, Tạp chí Cộng sản, Phó Bí thư Chi bộ. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">09/1980 - 08/1981</div>
                    <div className="timeline-content">
                        <p>Học Nga văn tại Trường Đảng cao cấp Nguyễn Ái Quốc. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">09/1981 - 07/1983</div>
                    <div className="timeline-content">
                        <p>Thực tập sinh và bảo vệ luận án. Phó Tiến sĩ (nay là Tiến sĩ) Khoa học lịch sử (chuyên ngành Xây dựng Đảng)
                        ở Viện Hàn lâm Khoa học xã hội Liên Xô, trực thuộc Ban Chấp hành Trung ương Đảng Cộng sản Liên Xô.     </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">08/1983 - 08/1987</div>
                    <div className="timeline-content">
                        <p>Phó Ban Xây dựng Đảng, Tạp chí Cộng sản. </p>
                    </div>
                    </div>

                    <div className="timeline-item">
                    <div className="timeline-date">09/1987 - 02/1989</div>
                    <div className="timeline-content">
                        <p>Trưởng Ban Xây dựng Đảng; Phó Bí thư Đảng ủy
                        (từ tháng 7/1985-Tháng 12/1988),
                        Bí thư Đảng ủy cơ quan Tạp chí Cộng sản 
                        (tháng 12/1988 - tháng 12/1991).   </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">03/1989 - 04/1990</div>
                    <div className="timeline-content">
                        <p>Ủy viên Ban Biên tập Tạp chí Cộng sản. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">05/1990 - 07/1991</div>
                    <div className="timeline-content">
                        <p>Phó Tổng Biên tập Tạp chí Cộng sản. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">08/1991 - 08/1996</div>
                    <div className="timeline-content">
                        <p>Tổng Biên tập Tạp chí Cộng sản.  Tại Hội nghị đại biểu toàn quốc giữa nhiệm kỳ khóa VII của Đảng (tháng 1/1994), đồng chí được bầu vào 
                        Ban Chấp hành Trung ương Đảng. Đồng chí là Ủy viên Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam các khóa VII, VIII, IX, X, XI, XII, XIII. 
                        </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">08/1996 - 02/1998</div>
                    <div className="timeline-content">
                        <p>Phó Bí thư Thành ủy Hà Nội, kiêm
                        Trưởng Ban Cán sự đại học và
                        trực tiếp phụ trách Ban Tuyên giáo Thành ủy Hà Nội.
                        Tại Hội nghị lần thứ 4 Ban Chấp hành
                        Trung ương Đảng khóa VIII (tháng 12/1997),
                        đồng chí được bầu vào Bộ Chính trị. Đồng chí là
                        Ủy viên Bộ Chính trị các khóa VIII, IX, X, XI, XII, XIII. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">02/1998 - 01/2000</div>
                    <div className="timeline-content">
                        <p>Phụ trách công tác Tư tưởng-Văn hóa và Khoa giáo của Đảng. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">03/1998 - 11/2006</div>
                    <div className="timeline-content">
                        <p>Phó Chủ tịch Hội đồng Lý luận Trung ương;
                            Chủ tịch Hội đồng Lý luận Trung ương,
                            phụ trách công tác lý luận của Đảng
                            (tháng 11/2001 - tháng 8/2006). </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">08/1999 - 04/2001</div>
                    <div className="timeline-content">
                        <p>Tham gia Thường trực Bộ Chính trị,
                        Ban Chấp hành Trung ương Đảng Cộng sản Việt Nam. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">01/2000 - 06/2006</div>
                    <div className="timeline-content">
                        <p>Bí thư Thành ủy Hà Nội các khóa XII, XIII, XIV. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">05/2002 - 07/2024</div>
                    <div className="timeline-content">
                        <p>Đại biểu Quốc hội các khóa XI, XII, XIII, XIV, XV. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">06/2006 - 07/2011</div>
                    <div className="timeline-content">
                        <p>Chủ tịch Quốc hội
                        nước Cộng hòa xã hội chủ nghĩa Việt Nam khóa XI, XII,
                        Bí thư Đảng đoàn Quốc hội,
                        Ủy viên Hội đồng Quốc phòng và An ninh. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">01/2011 - 07/2024</div>
                    <div className="timeline-content">
                        <p>Tổng Bí thư Ban Chấp hành Trung ương
                            Đảng Cộng sản Việt Nam các khóa XI, XII, XIII,
                            Bí thư Quân ủy Trung ương. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">02/2013 - 07/2024</div>
                    <div className="timeline-content">
                        <p>Trưởng Ban Chỉ đạo Trung ương
                        về phòng, chống tham nhũng, tiêu cực. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">08/2016 - 07/2024</div>
                    <div className="timeline-content">
                        <p>Tham gia Ban Thường vụ Đảng ủy Công an Trung ương nhiệm kỳ 2015-2020 và 2020-2025. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">10/2018 - 04/2021</div>
                    <div className="timeline-content">
                        <p>Tổng Bí thư,
                            Chủ tịch nước Cộng hòa xã hội chủ nghĩa Việt Nam nhiệm kỳ 2016-2021;
                            Chủ tịch Hội đồng Quốc phòng và An ninh. </p>
                    </div>
                    </div>
                    <div className="timeline-item">
                    <div className="timeline-date">04/2021 - 07/2024</div>
                    <div className="timeline-content">
                        <p>Tổng Bí thư Ban Chấp hành Trung ương
                            Đảng Cộng sản Việt Nam,
                            Bí thư Quân ủy Trung ương,
                            Ủy viên Ban Thường vụ Đảng ủy Công an Trung ương,
                            Trưởng Ban Chỉ đạo Trung ương về phòng, chống tham nhũng, tiêu cực. </p>
                    </div>
                    </div>
                    
                </div>
                </section>
                <section className="timeline-image">
                        <div className="timeline-image">
                          <div className="award-image">
                            <img src={QH} alt="QH" />
                          </div>
                          <div className="award-content">
                            <p>
                            "Do có nhiều công lao to lớn và đặc biệt xuất sắc đối với sự nghiệp cách mạng của Đảng, của dân tộc,
                              đồng chí được tặng thưởng" 
                              <span className="highlight-red"> Huân chương Sao vàng</span>, 
                              <span className="highlight-red"> Huy hiệu 55 năm tuổi Đảng 
                              và nhiều huân chương, huy chương cao quý khác của Việt Nam và quốc tế:</span> 
                            </p>
                            <p>
                              "<span className="highlight-red">Huân chương Vàng quốc gia</span>" của Chủ tịch nước Cộng hòa Dân chủ nhân dân Lào, 
                              "<span className="highlight-red">Huân chương Hữu nghị</span>" của Đảng và Nhà nước Cộng hòa nhân dân Trung Hoa, 
                              "<span className="highlight-red">Giải thưởng Lênin</span>" giải thưởng cao quý nhất của Ban Chấp hành Trung ương Đảng Cộng sản Liên bang Nga;
                            </p>
                            <p>
                              "<span className="highlight-red">Huân chương José Martí</span>" của Đảng, Nhà nước Cộng hòa Cuba
                              và nhiều danh hiệu cao quý khác.
                            </p>
                          </div>
                        </div>
                      </section>
                </main>
               
                    </div>       
                  );
                 
                }

                export default Introduce;
