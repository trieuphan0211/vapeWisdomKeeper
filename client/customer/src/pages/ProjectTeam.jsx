import React, { useEffect } from "react";
import "../assets/scss/ProjectPage.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Box, duration } from "@mui/material";
import title from "../assets/img/project/title.png";
import goal1 from "../assets/img/SDG-1.svg";
import goal2 from "../assets/img/SDG-2.svg";
import goal3 from "../assets/img/SDG-3.svg";
import goal4 from "../assets/img/SDG-4.svg";
import goal5 from "../assets/img/SDG-5.svg";
import goal6 from "../assets/img/SDG-6.svg";
import goal7 from "../assets/img/SDG-7.svg";
import goal8 from "../assets/img/SDG-8.svg";
import goal9 from "../assets/img/SDG-9.svg";
import goal10 from "../assets/img/SDG-10.svg";
import goal11 from "../assets/img/SDG-11.svg";
import goal12 from "../assets/img/SDG-12.svg";
import goal13 from "../assets/img/SDG-13.svg";
import goal14 from "../assets/img/SDG-14.svg";
import goal15 from "../assets/img/SDG-15.svg";
import goal16 from "../assets/img/SDG-16.svg";
import goal17 from "../assets/img/SDG-17.svg";

import member_giang from "../assets/img/members/Giang.png";
import member_trinh from "../assets/img/members/Trinh.png";
import member_huong from "../assets/img/members/Huong.png";
import member_phong from "../assets/img/members/Phong.png";
import member_trieu from "../assets/img/members/Trieu.png";
import member_dat from "../assets/img/members/Dat.png";
import member_nhat from "../assets/img/members/Nhat.png";
import member_tai from "../assets/img/members/Tai.png";
import vape_structure from "../assets/img/project/vape_structure.png";
import picture2 from "../assets/img/project/Picture2.png";
import picture3 from "../assets/img/project/Picture3.png";
import picture4 from "../assets/img/project/Picture4.jpg";

import Modal from "@mui/material/Modal";

export const ProjectTeam = () => {
  document.title = "Project | The Wisdom Vape";
  const goals = [
    goal1,
    goal2,
    goal3,
    goal4,
    goal5,
    goal6,
    goal7,
    goal8,
    goal9,
    goal10,
    goal11,
    goal12,
    goal13,
    goal14,
    goal15,
    goal16,
    goal17,
  ];
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    // handleOpen();
  }, []);
  // Begin: Slider
  const properties = {
    duration: 0,
    transitionDuration: 5000,

    arrows: false,
    autoplay: true,
    infinite: true,
    canSwipe: false,
    cssClass: "project_detail-slider",
    slidesToShow: 4,
  };
  // End: Slider
  return (
    <Box className="project">
      <Box className="project_background">
        <Box className="project_background-title">
          <p>DỰ ÁN PHỤC VỤ CỘNG ĐỒNG</p>
          <p>KỸ NĂNG CÔNG DÂN TOÀN CẦU</p>
        </Box>
      </Box>
      <Box className="project_intro">
        <h1 className="project_intro-header">Lời mở đầu</h1>
        <p className="project_intro-p">
          Dự án phục vụ cộng đồng dựa trên 17 mục tiêu phát triển bền vững của
          Liên hiệp quốc. Sinh viên chọn một mục tiêu phù hợp với chuyên ngành
          học để tổ chức và lên phương án thực hiện việc ứng dụng học tập vào
          phục vụ cho cộng đồng (Sinh viên, các nhóm người cần hổ trợ, bảo vệ
          môi trường...).
          <br />
          <br /> SV cập nhật tiến độ thực hiện hàng tuần trên trang này, sử dụng
          các công cụ Microsoft 365 để thực hiện như Word, PPT, onenote,
          onedrive, MS Team, MS form...).
          <br />
          <br />
          <br /> Dưới đây là{" "}
          <span> 17 mục tiêu phát triển bền vững của Liên hiệp quốc </span>
          đến năm 2030:
        </p>
      </Box>
      <Box className="project_goals">
        <img className="project_goals-title" src={title} alt="" />
        <Box className="project_goals-comp">
          {goals.map((goal, index) => (
            <a
              href={`https://vietnam.un.org/vi/sdgs/${index + 1}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="project_goals-comp-item" src={goal} alt="" />
            </a>
          ))}
        </Box>
      </Box>
      <Box className="project_detail">
        <p className="project_detail-subIntro">
          Sau hơn 12 tuần lên ý tưởng và phát triển, dự án đã hoàn thành của
          nhóm “The Vape Wisdom Keeper” cũng đã đi đến giai đoạn cuối cùng. Hãy
          cùng quay ngược thời gian và xem chúng mình đã làm được những gì trong
          hai tháng qua nhé. {">.<"}
        </p>
        <h1 className="project_detail-header">
          DỰ ÁN ẢNH HƯỞNG CỦA THUỐC LÁ ĐIỆN TỬ ĐẾN GIỚI TRẺ
        </h1>
        <h5 className="project_detail-subheader"> Sinh viên thực hiện</h5>
        <Slide {...properties}>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_giang} alt="" />
              <h6>
                Vũ Hoàng Giang <br />
                <span
                  style={{
                    color: "#f50057",
                  }}
                >
                  {" "}
                  Leader
                </span>
              </h6>
              <p>2174802010807</p>
            </Box>
          </Box>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_trinh} alt="" />
              <h6>Lê Hoàng Phương Trinh</h6>
              <p>2173402010758</p>
            </Box>
          </Box>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_huong} alt="" />
              <h6>Huỳnh Thị Quỳnh Hương</h6>
              <p>2173201081416</p>
            </Box>
          </Box>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_phong} alt="" />
              <h6>Lê Hồng Phong</h6>
              <p>2174802010380</p>
            </Box>
          </Box>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_trieu} alt="" />
              <h6>Phan Ngọc Triệu</h6>
              <p>207CT28659</p>
            </Box>
          </Box>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_dat} alt="" />
              <h6>Nguyễn Tấn Đạt</h6>
              <p>2174802010469</p>
            </Box>
          </Box>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_nhat} alt="" />
              <h6>Nguyễn Quốc Nhật</h6>
              <p>2174802010877</p>
            </Box>
          </Box>
          <Box className="each-slide-effect ">
            <Box className="slider_item">
              <img src={member_tai} alt="" />
              <h6>Nguyễn Tuấn Tài</h6>
              <p>2174802010740</p>
            </Box>
          </Box>
        </Slide>
      </Box>
      <Box className="project_chapter">
        <h1 className="project_chapter-h1">
          CHƯƠNG I: TÌNH TRẠNG SỬ DỤNG “THUỐC LÁ ĐIỆN TỬ” CỦA GIỚI TRẺ HIỆN NAY
        </h1>
        <h2 className="project_chapter-h2">
          I. THỰC TRẠNG SỬ DỤNG “THUỐC LÁ ĐIỆN TỬ”:
        </h2>
        <h3 className="project_chapter-h3">1. Khái niệm “Thuốc lá điện tử”:</h3>
        <p className="project_chapter-p">
          Thuốc lá điện tử (tên tiếng Anh là vape) là loại mô phỏng hình dạng và
          chức năng của thuốc lá thông thường, hoạt động bằng cách sử dụng thiết
          bị điện tử có hệ thống pin sạc làm nóng dung dịch lỏng hòa tan, tạo ra
          dạng khí dung cho người dùng hít vào luồng hơi có mùi vị và cảm giác
          giống thuốc lá thật.
        </p>
        <img
          className="project_chapter-img"
          src={vape_structure}
          alt="Cấu tạo của “thuốc lá điện tử”"
        />
        <h3 className="project_chapter-h3">
          2. Thực trạng giới trẻ sử dụng “Thuốc lá điện tử” ở Việt Nam:
        </h3>
        <p className="project_chapter-p">
          Trong những năm qua, với những nỗ lực của Bộ Y tế và các bộ, ngành,
          các tỉnh, thành phố, công tác phòng chống tác hại của thuốc lá đã đạt
          được nhiều kết quả đáng ghi nhận. So với năm 2015, tỷ lệ sử dụng thuốc
          lá trong nam giới Việt Nam giảm từ 45,3% xuống 42,3%.
        </p>
        <p className="project_chapter-p">
          Với các kết quả như trên, theo ước tính của Tổ chức Y tế thế giới
          (WHO), Việt Nam đã phòng tránh được 280.000 ca tử vong sớm vì các bệnh
          liên quan đến sử dụng thuốc lá. Ước tính chi phí tiết kiệm được do
          giảm tỷ lệ bệnh tật do sử dụng thuốc lá gây ra trong giai đoạn 2015 -
          2020 là 1.277 tỷ đồng/năm.
        </p>
        <p className="project_chapter-p">
          Tuy nhiên, với 15,4 triệu người hút thuốc (Bộ Y tế, 2020), Việt Nam
          nằm trong số quốc gia có số người hút thuốc lá cao nhất trên thế giới.
          Giai đoạn 2010 - 2020 tỷ lệ hút thuốc người trưởng thành giảm chậm, tỷ
          lệ phơi nhiễm với khói thuốc thụ động vẫn ở mức cao, chưa đạt được mục
          tiêu đề ra trong Chiến lược phòng chống tác hại thuốc lá đến năm 2020,
          đó là giảm sử dụng thuốc lá ở nam giới xuống còn 39%.
        </p>
        <p className="project_chapter-p">
          Đáng lo ngại hơn, theo nghiên cứu về tình hình sử dụng thuốc lá năm
          2020, tỷ lệ hút thuốc lá điện tử trong thanh thiếu niên Việt Nam đang
          gia tăng nhanh chóng. Theo nghiên cứu về Sức khỏe thanh thiếu niên ở
          nhóm tuổi 13 - 17 tuổi của WHO, tỷ lệ hút thuốc lá điện tử chiếm 2,6%
          năm 2020. Xu hướng sử dụng thuốc lá điện tử tập trung cao ở nhóm tuổi
          15 - 24 tuổi với tỷ lệ là 7,3% so với các nhóm tuổi 25 - 44 tuổi
          (3,2%), 45 - 64 tuổi (1,4%) .
        </p>
        <h2 className="project_chapter-h2">
          II. NGUYÊN NHÂN GIA TĂNG SỐ LƯỢNG NGƯỜI SỬ DỤNG “THUỐC LÁ ĐIỆN TỬ”:
        </h2>
        <h3 className="project_chapter-h3">
          1. Do căng thẳng mệt mỏi trong công việc và cuộc sống:
        </h3>
        <h3 className="project_chapter-h3">
          2. Sử dụng thay cho thuốc lá thông thường:
        </h3>
        <h3 className="project_chapter-h3">3. Đua đòi với bạn bè:</h3>
        <p className="project_chapter-p">
          Tiến sĩ Dương Thị Thanh Thanh - phó trưởng khoa tâm lý giáo dục,
          Trường Sư phạm, Đại học Vinh - cho rằng nguyên nhân học sinh hút thuốc
          lá điện tử và tiếp cận sớm với chất gây nghiện mới do tâm lý các em
          muốn thể hiện, khẳng định bản thân và thường bị bạn bè rủ rê, lôi kéo,
          thậm chí ép buộc sử dụng thuốc lá điện tử. (theo báo{" "}
          <a
            href="https://tuoitre.vn/vi-sao-hoc-sinh-ngay-cang-me-hut-thuoc-la-dien-tu-20231015161604062.htm"
            target="_blank"
          >
            tuoitre.vn
          </a>
          )
        </p>
        <h2 className="project_chapter-h2">
          III. ẢNH HƯỞNG CỦA THUỐC LÁ ĐIỆN TỬ ĐẾN SỨC KHỎE:
        </h2>
        <h3 className="project_chapter-h3">1. Đối với con người:</h3>
        <h4 className="project_chapter-h4">
          1.1. Đối với người hút trực tiếp:
        </h4>
        <h5 className="project_chapter-h5">
          1.1.1 Gây nghiện và ảnh hưởng tới hệ thần kinh:
        </h5>
        <p className="project_chapter-p">
          Nicotine trong thuốc lá điện tử và thuốc lá nung nóng là chất gây
          nghiện mạnh và rất độc hại, do đó gây hại như các sản phẩm thuốc lá
          điếu thông thường.
        </p>
        <p className="project_chapter-p">
          Nicotine làm cho người hút thuốc lá nhanh chóng bị nghiện thuốc lá (lệ
          thuộc vào nicotine) dù chỉ sau vài lần hút thuốc. Nicotine có thể vào
          não bộ từ 7 đến 10 giây sau khi hút thuốc lá điện tử, làm tăng lượng
          dopamine trong não và làm người hút thuốc cảm thấy sảng khoái. Khi đã
          bị nghiện thuốc lá, nếu thiếu thuốc lá hoặc dừng hút thuốc sẽ có biểu
          hiện thèm thuốc, cơ thể mệt mỏi, chán nản, hay cáu kỉnh. Để cai nghiện
          thuốc lá rất khó và mất nhiều thời gian và công sức.
        </p>
        <img
          className="project_chapter-img"
          src={picture2}
          alt="Nicotin trong thuốc thuốc lá điện tử là chất gây nghiện mạnh"
        />
        <p className="project_chapter-p">
          Sử dụng nitcotine liều cao có thể làm trầm trọng hơn các triệu chứng
          trầm cảm và lo âu.
        </p>
        <p className="project_chapter-p">
          Sử dụng nicotine lâu dài làm kìm hãm sự phát triển của não bộ, ảnh
          hưởng đến khả năng nhớ, tập trung chú ý và học tập, do vậy đặc biệt
          tác động đối với trẻ em. Do não bộ của con người phát triển từ khi
          sinh ra cho đến khi 25 tuổi, thanh thiếu niên sử dụng thuốc lá điện tử
          dễ dàng bị nghiện nicotine hơn, ảnh hưởng tới sức khỏe cũng xảy ra sớm
          hơn và trầm trọng hơn.
        </p>
        <p className="project_chapter-p">
          Sử dụng nicotine ở tuổi vị thành niên cũng có thể làm tăng nguy cơ
          nghiện các chất gây nghiện khác (như ma túy) ở nhóm tuổi này. Hơn nữa,
          sử dụng thuốc lá điện tử ở giới trẻ cũng làm tăng khả năng hút thuốc
          lá trong tương lai.
        </p>
        <h5 className="project_chapter-h5">1.1.2. Bệnh lý đường hô hấp:</h5>
        <p className="project_chapter-p">
          <span> Bệnh ‘phổi bỏng ngô’ (popcorn lung)</span> hay còn gọi là viêm
          tiểu phế quản tắc nghẽn. Một bệnh hiếm gặp được cho là do diacetyl,
          một trong các hóa chất tạo mùi hương trong khói thuốc lá điện tử có
          khả năng đi sâu vào phổi gây ra. Các biểu hiện thường gặp là ho, thở
          khò khè, đau ngực và thở nông. Hiện chưa có thuốc điều trị khỏi hoàn
          toàn bệnh này.
        </p>
        <p className="project_chapter-p">
          <span> Bệnh viêm phổi lipoid</span> Có liên quan đến hút thuốc lá điện
          tử và thuốc lá nung nóng (vaping-related lipoid pneumonia) là hậu quả
          của việc hít các hợp chất dầu có trong dung dịch điện tử. Các axit béo
          bám dính vào phổi và gây ra phản ứng viêm tại phổi. Các triệu chứng
          thường gặp là ho mạn tính, thở nông, ho ra máu hoặc đờm có máu. Hiện
          tại không có thuốc điều trị đặc hiệu cho bệnh này.
        </p>
        <p className="project_chapter-p">
          <span>Hội chứng tổn thương phổi cấp do thuốc lá điện tử</span>{" "}
          (E-cig-arette Acute Lung Injury Syndrome – EVALI). Vitamin E acetate
          có trong thuốc lá điện tử được cho là nguyên nhân gây hội chứng này.
          Các triệu chứng thường gặp là khó thở, ho, đau ngực, sốt, ớn lạnh,
          tiêu chảy, buồn nôn và nôn, thở nhanh và nông.
        </p>
        <p className="project_chapter-p">
          <span>Suy giảm chức năng phổi:</span> Kim loại được giải phóng từ khói
          thuốc lá điện tử, tùy mức độ tiếp xúc, có khả năng gây ra khó thở,
          kích ứng phế quản và phổi, kích ứng màng nhầy ở mắt và đường hô hấp
          trên.
        </p>
        <p className="project_chapter-p">
          <span> Bệnh phổi tắc nghẽn mạn tính:</span> Sử dụng thuốc lá điện tử
          lâu dài có thể gây bệnh phổi tắc nghẽn mạn tính. Triệu chứng thường
          gặp của bệnh là ho, khó thở kéo dài vì đường thở bị hẹp lại so với
          bình thường. Phổi tắc nghẽn mạn tính có thể gây ra tình trạng suy giảm
          hô hấp, hạn chế khả năng hoạt động hàng ngày, làm giảm chất lượng cuộc
          sống.
        </p>
        <h5 className="project_chapter-h5">1.1.3. Bệnh lý tim mạch:</h5>
        <p className="project_chapter-p">
          Nicotine làm tăng nguy cơ rối loạn tim mạch. Sử dụng nicotine lâu dài
          có thể gây suy tim hoặc tử vong. Một số hóa chất độc hại như carbon
          monoxide trong khói thuốc lá điện tử và thuốc lá nung nóng làm tăng
          nguy cơ hình thành huyết khối và xơ vữa động mạch, nhồi máu cơ tim,
          suy tim, đột quỵ.
        </p>
        <img
          className="project_chapter-img"
          src={picture3}
          alt="Ảnh hưởng đến tim mạch"
        />
        <h5 className="project_chapter-h5">1.1.4. Gây ung thư:</h5>
        <p className="project_chapter-p">
          Một số hợp chất có trong khói thuốc lá điện tử như: formaldehyd,
          acrolein, toluene, chất đặc biệt gây ung thư nitrosamine và
          hy-drocarbon thơm đa vòng, các kim loại nặng (như niken và chì) có thể
          gây các thay đổi tế bào liên quan đến ung thư tương tự như người hút
          thuốc lá điếu thông thường
        </p>
        <img
          className="project_chapter-img"
          src={picture4}
          alt="Ảnh hưởng đến tim mạch"
        />
        <p className="project_chapter-p">
          Ngoài việc gây nghiện cao, nicotine làm tăng nguy cơ gây ung thư thông
          qua tăng sinh tế bào, mất cân bằng oxy hóa, gây chết tế bào và đột
          biến DNA, cũng như sự phát triển của khối u.
        </p>
        <h5 className="project_chapter-h5">1.1.5. Gây chấn thương:</h5>
        <p className="project_chapter-p">
          Các thiết bị trong thuốc lá điện tử có thể hỏng, lỗi và phát nổ gây ra
          các chấn thương, bỏng nghiêm trọng (miệng, mặt, cổ, mắt mũi, xương
          hàm, cổ). Chỉ riêng tại Hoa Kỳ từ năm 2015 đến 2017, ước tính có
          khoảng 2.035 vụ nổ thuốc lá điện tử và các tổn thương do bỏng tại các
          khoa cấp cứu của bệnh viện Hoa Kỳ.
        </p>
        <h4 className="project_chapter-h4">
          1.2. Đối với người hút thuốc thụ động:
        </h4>
        <p className="project_chapter-p">
          Khói từ thuốc lá điện tử và thuốc lá nung nóng gây hại cho sức khỏe
          của những người xung quanh. Bằng chứng cho thấy có sự phơi nhiễm
          nicotine ở những người không sử dụng thuốc lá tiếp xúc với khói từ
          thuốc lá điện tử và thuốc lá nung nóng. Các triệu chứng thường gặp ở
          người tiếp xúc thụ động với thuốc lá điện tử và thuốc lá nung nóng gồm
          khó thở, kích ứng mắt, nhức đầu, buồn nôn và đau họng hoặc kích thích
          họng.
        </p>
        <p className="project_chapter-p">
          Hít phải các chất độc hại như nitrosamines, aldehydes, carbon
          monoxide... trong khói của thuốc lá điện tử và thuốc lá nung nóng cũng
          có nguy cơ mắc ung thư và tăng nguy cơ tim mạch, đột quỵ.
        </p>
        <p className="project_chapter-p">
          Trẻ em là đối tượng dễ bị ảnh hưởng nhất bởi khói thuốc lá điện tử và
          khói thuốc lá nung nóng. Bằng chứng cho thấy chỉ một lượng nhỏ khói
          thuốc lá điện tử và thuốc là nung nóng cũng tác động tới sự phát triển
          của não bộ và phổi của trẻ em.
        </p>
        <p className="project_chapter-p">
          Phụ nữ có thai đặc biệt dễ bị tác động bởi nicotine trong khói thuốc
          lá điện tử và thuốc lá nung nóng. Các nguy cơ có thể gồm: sinh thiếu
          tháng, trẻ sinh ra thiếu cân, thai lưu, dị dạng phát triển não và
          phổi, hội chứng đột tử ở trẻ sơ sinh.
        </p>
        <h3 className="project_chapter-h3">
          2. Đối với kinh tế và môi trường:
        </h3>
        <h4 className="project_chapter-h4">
          2.1. Nguy cơ phát sinh các tệ nạn xã hội:
        </h4>
        <p className="project_chapter-p">
          Người sử dụng thuốc lá điện tử, thuốc lá nung nóng có thể tự ý tăng tỷ
          lệ nicotine quá mức hoặc thêm ma túy và các chất gây nghiện khác vào
          để sử dụng mà khó bị phát hiện. Pha trộn ma túy vào dung dịch điện tử
          đã được ghi nhận ở Trung tâm Chống độc bệnh viện Bạch Mai và Trung tâm
          giám định ma túy Viện Khoa học hình sự Bộ Công an.
        </p>
        <p className="project_chapter-p">
          Tại Mỹ, nghiên cứu sử dụng dữ liệu Điều tra quốc gia về sử dụng thuốc
          lá ở thanh thiếu niên (lớp 6 đến lớp 12) năm 2016 cho thấy tỷ lệ đã
          từng sử dụng chất ma túy từ cây cannabis trong thuốc lá điện tử là
          30,6% trong số những thanh thiếu niên đã từng sử dụng thuốc lá điện
          tử.
        </p>
        <h4 className="project_chapter-h4">2.2. Ảnh hưởng tới môi trường:</h4>
        <p className="project_chapter-p">
          Thiết bị điện tử có thể hỏng, lỗi và gây cháy nổ, thương tích, mất an
          toàn cho người sử dụng. Rác thải bộ phận điện tử của thuốc lá điện tử
          và thuốc lá nung nóng gây ảnh hưởng đến môi trường, đặc biệt là với
          thiết bị sử dụng một lần.
        </p>
        <p className="project_chapter-p">
          Thêm vào đó, thiết bị thuốc lá điện tử, thuốc lá nung nóng có rất
          nhiều thành phần: nhựa, pin, bảng mạch điện, lọ dung dịch…., quy trình
          dỡ bỏ, phân loại… nhằm tái chế hay vứt bỏ, tiêu hủy đều phức tạp và
          tốn kém. Nếu bị vứt bỏ dưới dạng vỡ, nát có thể phát tán ra môi trường
          các chất độc hại như kim loại, axit, nicotine, ... Thực tế tại Mỹ, 58
          triệu sản phẩm thuốc lá điện tử được bán ra trong năm 2015, trong đó
          có 19,2 triệu sản phẩm dùng một lần. Các sản phẩm thuốc lá điện tử
          thiếu hướng dẫn người dùng cách vứt bỏ sản phẩm.
        </p>
        <h4 className="project_chapter-h4">
          2.3. Ảnh hưởng tới an sinh xã hội, kinh tế và sự phát triển bền vững:
        </h4>
        <p className="project_chapter-p">
          Thuốc lá điện tử, thuốc lá nung nóng làm gia tăng gánh nặng bệnh tật
          và chi phí liên quan đến sử dụng thuốc lá. Tính riêng các sản phẩm
          thuốc lá điếu, sử dụng thuốc lá đã gây thiệt hại 500 tỷ đô la mỗi năm
          cho nền kinh tế thế giới. Ước tính chi phí y tế điều trị các bệnh liên
          quan đến thuốc lá, giảm năng suất lao động và các chi phí xã hội khác
          là 1.852 tỷ đô la Mỹ chiếm 1,8% GDP26. Tại Việt Nam, chi phí y tế cho
          5 trong số 25 loại bệnh liên quan đến thuốc lá năm 2011 (ung thư phổi,
          ung thư đường tiêu hóa, nhồi máu cơ tim, đột quỵ và bệnh phổi tắc
          nghẽn mãn tính) đã là 24.679 tỷ đồng.
        </p>
        <p className="project_chapter-p">
          Tiêu dùng thuốc lá điện tử, thuốc lá nung nóng ảnh hưởng tới đói nghèo
          và phát triển bền vững. Các hãng thuốc lá điện tử, thuốc lá nung nóng
          đang có xu thế đưa ra nhiều sản phẩm với giá bán thấp hơn để tiếp cận
          người có thu nhập thấp (là đối tượng dễ tổn thương nhất). Chi tiêu cho
          thuốc lá làm giảm các chi tiêu thiết yếu khác của hộ gia đình, đặc
          biệt là ảnh hưởng đến sự phát triển của trẻ em trong các gia đình có
          thu nhập thấp. Tính trong các hộ gia đình nghèo, một người hút thuốc
          trong một năm tiêu hết số tiền bằng 1/3 số tiền chi cho lương thực,
          gấp 1,5 lần so với chi cho giáo dục, gấp 5 lần chi phí y tế tính theo
          bình quân đầu người. Như vậy, hút thuốc lá là một trong những nguyên
          nhân làm gia tăng nghèo đói.
        </p>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="project_video d-flex align-items-center justify-content-center"
      >
        <Box className="ratio ratio-16x9">
          <iframe
            src="https://www.youtube.com/embed/plt3LtDCS7k?rel=0"
            title="YouTube video"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </Box>
  );
};
