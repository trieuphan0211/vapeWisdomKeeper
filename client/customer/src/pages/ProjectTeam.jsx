import React, { useEffect } from "react";
import "../assets/scss/ProjectPage.scss";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Box, duration, Step, StepLabel, Typography } from "@mui/material";
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
import picture1 from "../assets/img/project/Picture1.png";
import picture2 from "../assets/img/project/Picture2.png";
import picture3 from "../assets/img/project/Picture3.png";
import picture4 from "../assets/img/project/Picture4.jpg";
import banner from "../assets/img/project/banner.png";
import fanpage from "../assets/img/project/fanpage.png";
import form from "../assets/img/project/form.png";
import website from "../assets/img/project/website.png";

import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
const mission = [
  {
    time: "Tuần 3 /n (18/09/2023 – 24/09/2023)",
    goals:
      "- Xác định rõ chủ đề và mục tiêu dự án hướng./n- Chia các nhóm nhỏ.",
    workList:
      "- Nhóm họp bàn, sau đó xác định chủ đề và mục tiêu của dự án./n- Chia 8 thành viên nhóm ra 4 ban nhỏ để dễ hoạt động.",
    responsibility: "Cả nhóm",
    cost: "Không có",
  },
  {
    time: "Tuần 4 & 5/n(25/09/2023 – 8/10/2023)",
    goals: "- Lên timeline./n- Lên kế hoạch chi tiết.",
    workList:
      "- Mỗi nhóm (các nhóm đã được đề cập ở mục 6.1) sẽ lên kế hoạch hoạt chi tiết hoạt động của sản phẩm của mỗi nhóm./n- Lên timeline cụ thể của nội dung cộng việc./n- Leader team và các nhóm trưởng họp bàn và cho ra bản kế hoạch cuối cùng sau khi tham mưu với thầy Phương – giảng viên môn học.",
    responsibility: "Cả nhóm",
    cost: "Không có",
  },
  {
    time: "Tuần 6/n(09/10/2023 – 15/10/2023)",
    goals:
      "- Team Fanpage: tạo fanpage./n- Team Web: thiết kế giao diện cho trang web./n- Team Design: hỗ trợ hình ảnh./n- Team Hậu cần: hỗ trợ các team.",
    workList:
      "- Team Fanpage: tạo fanpage, giới thiệu và nêu lý do của fanpage/n- Team Web: thiết kế ra giao diện chính của website./n- Team Design: thiết kế hình ảnh cho team fanpage đăng bài./n- Team Hậu cần: hỗ trợ các team.",
    responsibility: "Hoạt động theo team",
    cost: "Không có",
  },
  {
    time: "Tuần 7/n(16/10/2023 – 22/10/2023)",
    goals:
      "- Team Fanpage: đăng bài nói về “thực trạng việc sử dụng thuốc lá điện tử”. /n- Team Web: tiếp tục thiết kế giao diện trang web. /n- Team Design: hỗ trợ hình ảnh. /n- Team Hậu cần: hỗ trợ các team",
    workList:
      "- Team Fanpage: tìm kiếm nội dung thực trang về việc sử dụng thuốc lá điện tử. /n- Team Web: nghe feedback từ thành viên nhóm và chỉnh sửa cho phù hợp. /n- Team Design: /n+ Hỗ trợ hình ảnh cho team fanpage. /n+ Lên nội dung video báo cáo. /n- Team Hậu cần: hỗ trợ các team.",
    responsibility: "Hoạt động theo team",
    cost: "Không có",
  },
  {
    time: "Tuần 8/n(23/10/2023 – 29/10/2023)",
    goals:
      "- Team Fanpage: đăng bài khảo sát “mức độ nhận biết về thuốc lá điện tử”/n- Team Web: tạo trang home của website./n- Team Design: /n+ Hỗ trợ hình ảnh./n+ Hoàn thiện nội dung video báo cáo./n- Team Hậu cần:/n+ Lên nội dung và dự trù kinh phí buổi workshop./n+ Hỗ trợ các team.",
    workList:
      "- Team Fanpage: /n+ Tạo form/n+ Đăng bài khảo sát/n+ Kêu gọi các bạn sinh viên thực hiện khảo sát./n- Team Web: thiết kế trang home website. /n- Team Design:/n+ Thiết kế hình ảnh cho website./n+ Hoàn thiện nội dung video báo cáo sau khi cả nhóm feedback./n- Team Hậu cần:/n+ Lên nội dung, dự trù kinh phí và các công tác chuẩn bị cho buổi workshop./n+ Hỗ trợ các team.",
    responsibility: "Hoạt động theo team",
    cost: "Không có",
  },
  {
    time: "Tuần 9/n(30/10/2023 – 5/11/2023)",
    goals:
      "- Team Fanpage: đăng bài nguyên nhân sử dụng thuốc lá điện tử./n- Team Web: hoàn thiện trang home./n- Team Design:/n+ Quay và chụp quá trình học tập trên lớp./n+ Hỗ trợ hình ảnh./n- Team Hậu cần:/n+ Hoàn thiện nội dung và dự trù buổi workshop./n+ Hỗ trợ các team.",
    workList:
      "- Team Fanpage:/n+ Tìm nội dung “nguyên nhân thuốc lá điện tử dần được sử dụng phổ biến”/n+ Đăng bài./n- Team Web: hoàn thiện trang home./n- Team Design:/n+ Quay và chụp lại quá trình học tập trên lớp./n+ Hỗ trợ hình ảnh team fanpage./n- Team Hậu cần:/n+ Hoàn thiện nội dung và dự trù buổi workshop sau khi nghe feedback./n+ Hỗ trợ các team.",
    responsibility: "Hoạt động theo team",
    cost: "Không có",
  },
  {
    time: "Tuần 10/n(06/11/2023 – 12/11/2023)",
    goals:
      "- Team Fanpage: Đăng thông báo buổi workshop./n- Team Web: Thiết kế trang project và trang blog./n- Team Design:/n+ Quay và chụp quá trình học tập trên lớp./n- Team Hậu cần:/n+ Chuẩn bị các công tác cho buổi workshop.",
    workList:
      "- Team Fanpage: /n+ Tạo form đăng ký workshop./n+ Đăng bài truyền thông buổi workshop./n- Team Web: thiết kế trang project và blog./n- Team Design:/n+ Quay và chụp lại quá trình học tập trên lớp./n+ Thiết kế standee cho buổi workshop./n- Team Hậu cần:/n+ Mua bánh kẹo./n+ Đặt quà cho diễn giả./n+ Mời diễn giả./n+ In ấn giấy tờ./n+ Mời photo ngoài./n+ Đề xuất mượn phòng tổ chức workshop.",
    responsibility: "Hoạt động theo team",
    cost: "- Bánh kẹo: 235k./n- Quà cho diễn giả: 95k./n- In ấn: 125k/n- Photo ngoài: 100k/n=> Tổng: 555k",
  },
  {
    time: "Tuần 11 /n (13/11/2023 – 19/11/2023)",
    goals:
      "- Team Fanpage: Đăng bài cảm ơn đến diễn giả và các bạn sinh viên đã tham dự workshop./n- Team Web: hoàn thiện trang project và trang blog./n- Team Design: edit video báo cáo./n- Team Hậu cần: chuẩn bị buổi workshop./n- Diễn ra workshop.",
    workList:
      "- Team Fanpage: Đăng bài cảm ơn sau buổi workshop./n- Team Web: hoàn thiện trang project và trang blog./n- Team Design: edit video báo cáo sau khi workshop hoàn thành./n- Team Hậu cần: chuẩn bị các công tác tổ chức workshop./n- Cả nhóm ưu tiên tập trung triển khai và hoàn thành buổi workshop.",
    responsibility: "Hoạt động theo team",
    cost: "Không có",
  },
  {
    time: "Tuần 12 & 13/n(20/11/2023 – 03/12/2023)",
    goals:
      "- Hoàn thiện các sản phẩm./n- Thống kê báo cáo kết quả./n- Edit powerpoint./n- Hoàn thành file “báo cáo dự án”.",
    workList:
      "- Leader đốc thúc các team hoàn thành sản phẩm của mỗi nhóm./n- Mỗi nhóm thống kê báo cáo những gì nhóm đã làm và chưa làm được./n- Edit powerpoint: Giang./n- File báo cáo: Lead nhóm và các nhóm trưởng",
    responsibility: "Cả nhóm",
    cost: "Không có",
  },
  {
    time: "Tuần 14/n(04/12/2023 – 10/12/2023)",
    goals: "Chuẩn bị cho buổi báo cáo",
    workList: "Hoàn thiện các nội dung",
    responsibility: "Cả nhóm",
    cost: "Không có",
  },
];
const members = [
  {
    mssv: "2174802010807",
    fullname: "Vũ Hoàng Giang",
    responsibility: "- Lead team/n- Nhóm trưởng team hậu cần",
    working:
      "- Lên kế hoạch và timeline dự án./n- Tạo cuộc họp báo cáo nhóm mỗi tuần./n- Đốc thúc các nhóm thực hiện sản phẩm./n- Lên kế hoạch buổi workshop./n- Thống kê báo cáo dự án./n- Hỗ trợ edit video báo cáo.",
    note: "",
  },
  {
    mssv: "2173402010758",
    fullname: "Lê Hoàng Phương Trinh",
    responsibility: "Thành viên team hậu cần",
    working:
      "- Hỗ trợ các nhóm trong quá trình làm dự án./n- Hỗ trợ lên kế hoạch workshop.",
    note: "",
  },
  {
    mssv: "2173201081416",
    fullname: "Huỳnh Thị Quỳnh Hương",
    responsibility: "Nhóm trưởng team fanpage",
    working:
      "- Lên kế hoạch hoạt động của fanpage./n- Viết nội dung cho các bài post./n- Thống kê báo cáo team fanpage.",
    note: "",
  },
  {
    mssv: "2174802010380",
    fullname: "Lê Hồng Phong",
    responsibility: "- Thư ký nhóm/n- Thành viên team fanpage",
    working:
      "- Hỗ trợ quản lý fanpage./n- Tìm kiếm thông tin, nội dung đăng bài./n- Ghi lại những nội dung quan trọng trong các cuộc họp và trong giờ học.",
    note: "",
  },
  {
    mssv: "207CT28659",
    fullname: "Phan Ngọc Triệu",
    responsibility: "Nhóm trưởng team web",
    working:
      "- Lên ý tưởng cho website./n- Thiết kế giao diện website./n- Code 3 trang con: Home, Project, Blog./n- Thống kê báo cáo team web",
    note: "",
  },
  {
    mssv: "2174802010469",
    fullname: "Nguyễn Tấn Đạt",
    responsibility: "Thành viên team website",
    working:
      "- Hỗ trợ thiết kế giao diện website./n- Hỗ trợ code trang project.",
    note: "",
  },
  {
    mssv: "2174802010877",
    fullname: "Nguyễn Quốc Nhật",
    responsibility: "Thành viên team design",
    working: "- Quay và chụp quá trình học và làm dự án/n- Edit video báo cáo.",
    note: "",
  },
  {
    mssv: "2174802010740",
    fullname: "Nguyễn Tuấn Tài",
    responsibility: "Thành viên team design",
    working: "- Edit hình ảnh cho team fanpage./n- Thiết kế standee workshop.",
    note: "",
  },
];
const skills = [
  {
    name: "Kỹ năng lên kế hoạch",
    detail:
      "- Lập, phát triển kế hoạch dự án nhóm:/n+ Tính toán thời gian để hoàn thiện dự án: lên timeline chi tiết cho từng nội dung, chi tiết nhỏ của dự án./n+ Căn chỉnh các mục tiêu phù hợp: đặt ra mục tiêu cho dự án và số lượn sinh viên hưởng ứng.",
  },
  {
    name: "Kỹ năng quan sát, phân tích, chọn lọc vấn đề",
    detail:
      "- Quan sát, phân tích vấn đề, đưa ra lựa chọn cho dự án: từ việc quan sát môi trường xung quanh và khả năng phân tích vấn dề, nhóm nhận thấy vấn nạn “thuốc lá điện tử” đang gia tăng đáng sợ khi các bạn sinh viên sử dụng thuốc lá và thuốc lá điện tử quá nhiều./n- Quan sát và chọn lóc nội dung tỉ mỉ đăng lên fanpage.",
  },
  {
    name: "Kỹ năng giao tiếp",
    detail:
      "- Giao tiếp bằng ngôn ngữ viết: tạo form khảo sát, đặt câu hỏi, form đăng kí workshop, viết caption cho fanpage, thư mời cho diễn giả và sinh viên tham dự.",
  },
  {
    name: "Kỹ năng làm việc nhóm",
    detail:
      "- Hỗ trợ nhau kịp thời trong giai đoạn các thành viên trong nhóm đều đang học năm 3, năm 4: các bạn cố gắng hỗ trợ nhau và kết nối với nhau để hoàn thành sản phẩm./n- Các nội dung quan trọng của nhóm luôn được bỏ phiếu thông qua./n- Các thành viên luôn lắng nghe và góp ý trong mỗi cuộc họp.",
  },
];
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
          <br /> Dưới đây là
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
          thậm chí ép buộc sử dụng thuốc lá điện tử. (theo báo
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
          <span>Hội chứng tổn thương phổi cấp do thuốc lá điện tử</span>
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
        <h1 className="project_chapter-h1">CHƯƠNG II: KẾ HOẠCH DỰ ÁN</h1>
        <h2 className="project_chapter-h2">I. Ý TƯỞNG DỰ ÁN</h2>
        <ul>
          <li>
            <p className="project_chapter-p">
              - Qua quá trình lên ý tưởng và kế hoạch cho dự án, nhóm TWS đã
              chọn ra 3 mục tiêu trong 17 mục tiêu phát triển bền vững của Liên
              Hợp Quốc để áp dụng vào Dự án “Ảnh hưởng của thuốc lá điện tử dối
              với giới trẻ”:
            </p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  + <span>Mục tiêu số 3:</span> Sức khỏe và có cuộc sống tốt.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  + <span>Mục tiêu số 4:</span> Giáo dục chất lượng.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  + <span>Mục tiêu só 11:</span> Các thành phố và cộng đồng bền
                  vững.
                </p>
              </li>
              <img
                className="project_chapter-img"
                src={picture1}
                alt="17 mục tiêu phát triển bền vững của Liên Hợp Quốc"
              />
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">
              - Dựa trên tình trạng “thuốc lá điện tử” đang được sử dụng ngày
              càng nhiều trên thị trường Việt Nam nói chung và trên thế giới nói
              riêng, cũng như tác hại của “thuốc lá điện tử” đối với sức khỏe
              con người và môi trường tự nhiên:
            </p>
            <ul>
              <li>
                <p className="project_chapter-p">+ Tại Mỹ: </p>
                <ul>
                  <li>
                    <p className="project_chapter-p">
                      - Từ năm 2009 đến 2015 xảy ra <span>92 vụ cháy/ nổ</span>
                      do thuốc lá điện tử,
                      <span>gây chấn thương ở 47 người</span> và
                      <span>thiệt hại tài sản.</span>
                    </p>
                  </li>
                  <li>
                    <p className="project_chapter-p">
                      - <span>68 ca tử vong</span> và
                      <span>2807 trường hợp bị tổn thương hô cấp cấp</span>
                      (EVALI) phải nhập viện do sử dụng thuốc lá điện tử từ
                      8/2019 đến 18/02/2020 (số liệu của Trung tâm kiểm soát
                      bệnh tật Hoa Kỳ.)
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p className="project_chapter-p">+ Tại Anh: </p>
                <ul>
                  <li>
                    <p className="project_chapter-p">
                      -
                      <span>
                        Hơn 100 vụ cháy/ nổ, 2 trường hợp tử vong do cháy/ nổ
                      </span>
                      thuốc lá điện tử.
                    </p>
                  </li>
                  <li>
                    <p className="project_chapter-p">
                      -
                      <span>
                        4 ca tử vong có liên quan đến sử dụng thuốc lá điện tử
                      </span>
                      (ghi nhận bởi cơ quan Quản lý Thuốc).
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <p className="project_chapter-p">+ Tại Việt Nam: </p>
                <ul>
                  <li>
                    <p className="project_chapter-p">
                      - Theo Điều tra năm 2019 của Tổ chức Y tế Thế giới (WHO),
                      tỷ lệ sử dụng thuốc lá điện tử trong học sinh 15-17 tuổi
                      tại Việt Nam là <span>2,6%</span>. Điều tra tình hình sử
                      dụng trong học sinh năm 2022 cho thấy tỷ lệ sử dụng thuốc
                      lá điện tử độ tuổi 13-15 là <span>3,5%</span>.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">
              - Từ những vấn đề trên, nhóm đã quyết định tổ chức triển khai dự
              án tuyên truyền cho các bạn sinh viên tại trường đại học Văn Lang
              nói chung và các bạn sinh viên trên khắp cả nước nói riêng về ảnh
              hưởng của “thuốc lá điện tử” đối với sức khỏe, qua đó truyền tải
              thông điệp “Quit smoking before smoking quits you – Hãy bỏ thuốc
              lá trước khi nó bỏ bạn” và “Xây dựng một môi trường nói không với
              khói thuốc”.
            </p>
          </li>
        </ul>
        <h2 className="project_chapter-h2">II. KHÁI QUÁT Ý TƯỞNG THỰC HIỆN</h2>
        <div className="d-flex gap-4">
          <ul>
            <li>
              <p className="project_chapter-p">
                - <span>Tên dự án:</span> “
                <span className="yellow">
                  Ảnh hưởng của thuốc lá điện tử đối với giới trẻ
                </span>
                ”
              </p>
              <ul>
                <li>
                  <p className="project_chapter-p">
                    + Ý nghĩa tên dự án: đánh giá tác động của việc sử dụng
                    thuốc lá điện tử đến tình trạng sức khỏe và hành vi hút
                    thuốc của giới trẻ. Dự án nhằm tăng cường hiểu biết về tác
                    động của thuốc lá điện tử đối với lứa tuổi trẻ, từ đó đưa ra
                    các biện pháp phòng ngừa và giảm thiểu tác động tiêu cực của
                    việc sử dụng thuốc lá điện tử đối với sức khỏe và cộng đồng.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p className="project_chapter-p">
                - <span>Slogan:</span> “Quit smoking before smoking quits you –
                Hãy bỏ thuốc trước khi nó bỏ bạn”
              </p>
            </li>
            <li>
              <p className="project_chapter-p">
                - <span>Ý tưởng thực hiện:</span> Trong quá trình thực hiện dự
                án, nhóm đặt ra mục tiêu hoàn thành 4 sản phẩm mang tính tuyên
                truyền và cập nhập kiến thức về thuốc lá điện tử và ảnh hưởng
                của nó đến với đối tượng là các bạn sinh viên. 4 sản phẩm bao
                gồm:
              </p>
              <ul>
                <li>
                  <p className="project_chapter-p">
                    + <span>Fanpage facebook:</span> Do 3 thành viên nhóm tạo,
                    quản lý và duy trì. Những nội dung được tìm hiểu kỹ và nhóm
                    trưởng kiểm tra nội dung trước khi đăng lên fanpage.
                  </p>
                </li>
                <li>
                  <p className="project_chapter-p">
                    + <span>Website:</span> website truyền thông do nhóm tự
                    thiết kế dựa trên những kiến thức về chuyên ngành học của
                    ngành học đang theo học.
                  </p>
                </li>
                <li>
                  <p className="project_chapter-p">
                    +
                    <span>
                      Workshop “Thuốc lá điện tử ảnh hưởng đến giới trẻ”:
                    </span>
                    buổi workshop dành cho các bạn sinh viên trường đại học Văn
                    Lang, nội dung của buổi workshop xoay quanh chủ đề về thực
                    trạng, nguyên nhân và tác hại của thuốc lá điện tử. Trong đó
                    phần tác hại của thuốc lá điện tử được chia sẻ từ những vị
                    diễn giả khách mời trong lĩnh vực y tế, qua đó các bạn sinh
                    viên biết thêm được về tính nguy hại của thuốc lá điện tử.
                  </p>
                </li>
                <li>
                  <p className="project_chapter-p">
                    + <span>Video báo cáo:</span> video quay lại toàn bộ quá
                    trình học tập học phần “kỹ năng công dân toàn cầu” và quá
                    trình thực hiện dự án của nhóm.
                  </p>
                </li>
              </ul>
            </li>
            <li>
              <p className="project_chapter-p">
                {"=>"} Qua 4 sản phẩm trên, mục tiêu của nhóm hướng đến mang lại
                những thông tin và nhận thức đúng đắn về “thuốc lá điện tử” và
                ảnh hưởng của nó đến sức khỏe con người. Qua đó nâng cao nhận
                thức của các bạn sinh viên và cùng nhau tạo ra một môi trường
                sống lành mạnh “Nói không với thuốc lá và thuốc lá điện tử”.
              </p>
            </li>
          </ul>
          <img src={banner} alt="" />
        </div>
        <h2 className="project_chapter-h2">III. TÍNH CẤP THIẾT CỦA DỰ ÁN:</h2>
        <h3 className="project_chapter-h3">1. Tính cấp thiết:</h3>
        <p className="project_chapter-p">
          - Năm 2015, tỷ lệ sử dụng thuốc lá điện tử ở 34 tỉnh, thành phố chỉ
          khoảng 0,2% đến nay đã tăng 18 lần lên khoảng 3,6%. Các sản phẩm thuốc
          lá mới được đưa vào Việt Nam chủ yếu qua đường nhập lậu, xách tay và
          người tiêu dùng có thể dễ dàng mua bất hợp pháp các sản phẩm thuốc lá
          mới trên internet, các trang mạng xã hội…
        </p>
        <p className="project_chapter-p">
          - Theo Tổ chức Y tế Thế giới, sử dụng thuốc lá điện tử và thuốc lá
          nung nóng đều có hại cho sức khỏe của cả người hút và người xung quanh
          tương tự như thuốc lá thông thường. Các sản phẩm thuốc lá mới có chứa
          nicotine là chất gây nghiện cao, độc hại, gây bệnh tim mạch, hô hấp,
          tiêu hóa và ung thư.
        </p>
        <p className="project_chapter-p">
          - Thành phần của dung dịch thuốc lá điện tử còn có glycerin, propylene
          glycol và trên 15.500 loại hương liệu có nhiều chất độc (do đó rất khó
          ngăn được nguy cơ các đối tượng sẽ trà trộn ma túy tổng hợp vào trong
          thuốc lá điện tử). Propylene glycol có thể tạo thành propylene oxide,
          một chất gây ung thư khi được đun nóng và hóa hơi. Glycerin khi được
          đun nóng và hóa hơi tạo thành acrolein, gây kích ứng đường hô hấp
          trên.
        </p>
        <h3 className="project_chapter-h3">2. Dữ liệu cụ thể:</h3>
        <p className="project_chapter-p">
          - Theo kết quả "Điều tra sức khỏe học sinh Việt Nam năm 2019" của Tổ
          chức Y tế thế giới, tỷ lệ hiện đang hút thuốc lá điện tử trong học
          sinh 13-17 tuổi trên phạm vi cả nước là 2,6%, (ở học sinh khu vực
          thành thị là 3,4%).
        </p>
        <p className="project_chapter-p">
          - Năm 2020, theo Điều tra tình hình sử dụng thuốc lá năm 2020 tại 34
          tỉnh, thành phố của Việt Nam, tỷ lệ nam giới trưởng thành hiện đang sử
          dụng thuốc lá điện tử là 5,6%, nữ giới trưởng thành sử dụng thuốc lá
          điện tử là 1%.
        </p>
        <p className="project_chapter-p">
          - Một nghiên cứu khác tại Hà Nội do Viện Chiến lược và Chính sách y tế
          tiến hành năm 2020 cho thấy, tỷ lệ đang sử dụng thuốc lá điện tử ở học
          sinh lớp 8-12 là 8,35% (nữ là 4,8%, nam là 12,39%), ở học sinh lớp
          10-12 là 12,6%.
        </p>
        <p className="project_chapter-p">
          - Tỷ lệ nữ giới hút thuốc lá điện tử cũng tăng cao hơn so với hút
          thuốc lá điếu thông thường. Có tới 8% trẻ em gái và phụ nữ hút thuốc
          lá điện tử (trong khi tỷ lệ hút thuốc lá điếu ở nữ là 1,2%).
        </p>
        <p className="project_chapter-p">
          {"=>"} Nếu so sánh thô thì chỉ sau 5 năm, tỉ lệ hút thuốc lá điện tử ở
          Việt Nam đã tăng 36,5 lần đối với cả hai giới, và tăng lần lượt trong
          hai nhóm nam giới và nữ giới là 22,75 và 46 lần. Trong đó, tỷ lệ sử
          dụng thuốc lá mới ở các thành phố có xu hướng tăng, nhất là đối tượng
          học sinh, sinh viên, giới trẻ.
        </p>
        <p className="project_chapter-p project_chapter-p-italic">
          (Trích trong “Tỷ lệ sử dụng thuốc lá điện tử gia tăng, chuyên gia
          khuyến cáo gì về những nguy hại với sức khoẻ?” – Trung tâm y tế quận
          Gò Vấp – TP.HCM, xem thêm chi tiết
          <a href="https://trungtamytegovap.medinet.gov.vn/ban-tin-truyen-thong/ty-le-su-dung-thuoc-la-dien-tu-gia-tang-chuyen-gia-khuyen-cao-gi-ve-nhung-nguy-cmobile14393-76054.aspx">
            tại đây.
          </a>
          )
        </p>
        <h2 className="project_chapter-h2">
          IV. ĐỐI TƯỢNG THỤ HƯỞNG/ ĐỐI TƯỢNG TÁC ĐỘNG:
        </h2>
        <ul>
          <li>
            <p className="project_chapter-p">
              - <span>Đối tượng trực tiếp hưởng lợi từ dự án:</span> Tập thể
              nhóm thực hiện dự án – The Wisdom Vape team.
            </p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  + Thông qua những bài giảng của TS. Trần Nhật Phương (giảng
                  viên môn học) và giáo án do TTPTNLSV mang lại cho từng thành
                  viên cho nhóm thêm những kỹ năng mới để trở thành một công dân
                  toàn cầu. Qua đó từ cái nhìn và cảm nhận của từng cá nhân đóng
                  góp vào cho dự án của nhóm, tạo nên những sản phẩm hướng đến
                  mục tiêu cuối cùng của dự án.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">
              - <span> Đối tượng cần tác động của dự án:</span> Giới trẻ nói
              chung và sinh viên trường đại học Văn Lang nói riêng.
            </p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  + Từ việc truyền tải những nội dung và tác hại của “thuốc lá
                  điện tử” đến gần hơn với các bạn trẻ hiện nay thông qua những
                  sản phẩm của nhóm: fanpage, website, workshop để các bạn có
                  thể “nhìn – ngẫm – thấu hiểu” vấn đề. Từ đó tác động đến nhận
                  thức của các bạn, giúp các bạn nhìn nhận về sự nguy hại của
                  “thuốc lá điện tử”, đồng thời cổ vũ các bạn sinh viên cùng
                  chung tay tạo ra môi trường sống lành mạnh bằng cách từ bỏ
                  thuốc lá và thuốc lá điện tử.
                </p>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="project_chapter-h2">V. MỤC TIÊU CỦA DỰ ÁN</h2>
        <p className="project_chapter-p">- Dự án hướng đến những mục tiêu:</p>
        <ul>
          <li>
            <p className="project_chapter-p">
              + Truyền tải thông tin và tác hại của “thuốc lá điện tử” đến với
              các bạn sinh viên thông qua fanpage, website, buổi workshop và
              form khảo sát. Qua đó gửi tới thông điệp xây dựng một môi trường
              sống lành mạnh và bảo vệ sức khỏe của mỗi người bằng cách “Nói
              không với thuốc là và thuốc lá điện tử”.
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              + Dự kiến tiếp cận đến ít nhất 200 bạn sinh viên của trường đại
              học Văn Lang và các trường đại học lân cận thuộc thành phố Hồ Chí
              Minh.
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              + Tạo cơ hội cho các thành viên trong nhóm học tập, thực hành và
              cải thiện những kỹ năng đang có và được học trong học phần “kỹ
              năng công dân toàn cầu”.
            </p>
          </li>
        </ul>
        <h2 className="project_chapter-h2">VI. KẾ HOẠCH THỰC HIỆN</h2>
        <h3 className="project_chapter-h3">
          1. Tổng quan các nội dung chính cần thực hiện
        </h3>
        <ul>
          <li>
            <p className="project_chapter-p">
              <span>- Bước 1</span>: Xác định rõ chủ đề và mục tiêu dự án hướng
              tới là tuyên truyền “ảnh hưởng của thuốc lá điện tử đến với giới
              trẻ”, chia các nhóm nhỏ để dễ dàng hoạt động và tạo cơ hội cho các
              thành viên thực hành và thử sức:
            </p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  + Team Fanpage: Tạo, quản lý, duy trì và tìm hiểu thông tin về
                  nội dung đăng trên Fanpage.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  + Team Web: Tạo website của dự án.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  + Team Design: Thiết kế ảnh và video cho toàn bộ dự án.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  + Team hậu cần: Hỗ trợ các nhóm trên và lên kế hoạch cho buổi
                  Workshop.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">
              <span>- Bước 2</span>: Phân chia công việc cho từng thành viên,
              đối với mỗi nhóm sẽ có một Trưởng nhóm – phụ trách phân công công
              việc và báo cáo kết quá hoạt động của nhóm.
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              <span>- Bước 3</span>: Lên timeline và kế hoạch chi tiết của dự
              án.
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              <span>- Bước 4</span>: Các nhóm bắt đầu hoạt động dựa trên
              timeline và kế hoạch đã đưa ra.
            </p>
          </li>
        </ul>
        <h3 className="project_chapter-h3">
          2. Kế hoạch chi tiết thực hiện dự án
        </h3>
        <h4 className="project_chapter-h4">2.1. Tiến độ thực hiện</h4>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650,
              "& .MuiTableCell-head": {
                border: "1px solid rgba(224, 224, 224, 1)",
                fontWeight: "700",
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">THỜI GIAN</TableCell>
                <TableCell align="center">MỤC TIÊU CẦN HOÀN THÀNH</TableCell>
                <TableCell align="center">CÁC ĐẦU MỤC CÔNG VIỆC</TableCell>
                <TableCell align="center">NGƯỜI PHỤ TRÁCH</TableCell>
                <TableCell align="center">DỰ TRÙ KINH PHÍ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mission.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "& td, & th": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "16px",
                    },
                  }}
                >
                  <TableCell component="th" scope="item" align="center">
                    {item.time.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.goals.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.workList.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.responsibility.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.cost.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h4 className="project_chapter-h4">
          2.2. Chi tiết phân công nhiệm vụ theo từng cá nhân
        </h4>
        <TableContainer component={Paper}>
          <Table
            sx={{
              minWidth: 650,
              "& .MuiTableCell-head": {
                border: "1px solid rgba(224, 224, 224, 1)",
                fontWeight: "700",
              },
            }}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="center">STT</TableCell>
                <TableCell align="center">MSSV</TableCell>
                <TableCell align="center">HỌ VÀ TÊN</TableCell>
                <TableCell align="center">VAI TRÒ</TableCell>
                <TableCell align="center">CÔNG VIỆC</TableCell>
                <TableCell align="center">GHI CHÚ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {members.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "& td, & th": {
                      border: "1px solid rgba(224, 224, 224, 1)",
                      fontSize: "16px",
                    },
                  }}
                >
                  <TableCell component="th" scope="item" align="center">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">
                    {item.mssv.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.fullname.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.responsibility.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.working.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">
                    {item.note.split("/n").map((i) => (
                      <p>{i}</p>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h1 className="project_chapter-h1">
          CHƯƠNG III: KẾT QUẢ THỰC HIỆN DỰ ÁN
        </h1>
        <h2 className="project_chapter-h2">I. GIỚI THIỆU CHUNG </h2>
        <p className="project_chapter-p">
          Dự án “<span>Ảnh hưởng của thuốc lá điện tử đối với giới trẻ</span>”
          được nhóm 1 – The Wisdom Vape (TWS) thuộc lớp học phần Kỹ năng công
          dân toàn cầu 13 thực hiện với 8 thành viên đến từ 3 khoa: Công nghệ
          thông tin, Tài chính ngân hàng, Quan hệ công chúng – truyền thông,
          thuốc trường đại học Văn Lang. Dự án được lên kế hoạch và phát triển
          theo tổng số 3 mục tiêu trên 17 mục tiêu phát triển bền vững của Liên
          Hợp Quốc bao gồm:
        </p>
        <ul>
          <li>
            <p className="project_chapter-p">
              + Mục tiêu số 3: Sức khỏe và có cuộc sống tốt.
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              + Mục tiêu số 4: Giáo dục có chất lượng.
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              + Mục tiêu só 11: Các thành phố và cộng đồng bền vững.
            </p>
          </li>
        </ul>
        <p className="project_chapter-p">
          Dự án nhằm mang đến cho giới trẻ nói chung và các bạn sinh viên của
          trường đại học Văn Lang nói riêng nhận biết về tác hại của thuốc lá
          điện tử đối với sức khỏe, từ đó nâng cao nhận thức của các bạn về sự
          nguy hiểm của thuốc lá điện tử. Qua đó giúp cho các bạn”Từ bỏ thuốc lá
          điện tử trước khi nó bỏ bạn”, tạo ra một môi trường “Nói không với
          khói thuốc”.
        </p>
        <p className="project_chapter-p">
          Nhóm tạo ra 4 sản phẩm chính để tiếp cận và tuyên truyền đến các bạn
          sinh viên trong và ngoài trường đại học Văn Lang:
        </p>
        <ul>
          <li>
            <p className="project_chapter-p">
              <span>+ Fanpage facebook – “The Wisdom Vape”.</span>
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              <span>+ Website “The Wisdom Vape”.</span>
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              <span>+ Workshop “Thuốc lá điện tử ảnh hưởng đến giới trẻ”.</span>
            </p>
          </li>
          <li>
            <p className="project_chapter-p">
              <span>+ Video. </span>
            </p>
          </li>
        </ul>
        <h2 className="project_chapter-h2">
          II. Ý NGHĨA, ĐIỂM MỚI/SÁNG TẠO CỦA DỰ ÁN
        </h2>
        <h3 className="project_chapter-h3">1. Ý nghĩa của dự án:</h3>
        <p className="project_chapter-p">
          Dự án là sự kết tinh của toàn bộ tất cả thành viên nhóm, mỗi thành
          viên đều có những vai trò không thể thay thế, mọi người đều cố gắng
          hoàn thành tốt nhất có thể nhiệm vụ được giao. Không chỉ mang đến ý
          nghĩa to lớn về nhận thức của thế hệ trẻ hiện nay phải biết quý trọng
          và bảo vệ sức khỏe của mình, ngoài ra còn giúp giảm thiếu số lượng các
          bạn sinh viên, giới trẻ sử dụng thuốc lá điện tử. Nhờ sự dạy bảo của
          TS. Trần Nhật Phương – giảng viên bộ môn – và Trung tâm phát triển
          năng lực sinh viên, đã cho chúng em trải nghiệm môn học này. Trong
          suốt quá trình học tập và triển khai dự án, mỗi thành viên nhóm đã
          trau dồi thêm những kinh nghiệm, có cơ hội thực hành và trải nghiệm
          thêm những kỹ năng mới được học trong học phần như: kỹ năng giao tiếp,
          kỹ năng quản lý thời gian, kỹ năng làm việc nhóm, kỹ năng thuyết
          trình... giúp cho mỗi thành viên đều có những thu hoạch cá nhân giúp
          bản thân tiến xa hơn trong công việc và cuộc sống.
        </p>
        <h3 className="project_chapter-h3">2. Điểm mới/ sáng tạo của dự án:</h3>
        <p className="project_chapter-p">
          Với 4 sản phẩm trong dự án đã tạo ra điểm đột phá và sáng tạo của dự
          án. Làm tăng khả năng tuyên truyền đến nhiều đối tượng, đặc biệt là
          các bạn sinh viên.
        </p>
        <p className="project_chapter-p">
          Điểm nổi bật của dự án là chính các bạn sinh viên đã tự tìm hiểu, sàng
          lọc thông tin để tạo ra 1 trang web riêng cho dự án, giúp đẩy mạnh khả
          năng tuyên truyền cho dự án này.
        </p>
        <p className="project_chapter-p">
          Một đóng góp không hề nhỏ và cũng là điểm nhấn cho dự án chính là sự
          có mặt và chia sẻ của TS. Trần Nhật Phương tại buổi workshop “Thuốc lá
          điện tử ảnh hưởng đến giới trẻ”. Thầy đã có những chia sẻ thú vị và
          hấp dẫn về tác hại của thuốc lá điện tử đối với sức khỏe, qua đó đã
          cho các bạn sinh viên có thêm những góc nhìn mới và nhận thức đúng
          đắng về thuốc lá điện tử.
        </p>
        <h2 className="project_chapter-h2">
          III. ĐỐI TƯỢNG THỤ HƯỞNG/ TÁC ĐỘNG:
        </h2>
        <p className="project_chapter-p">
          Đối tượng thụ hưởng và nhận tác động lớn nhất của dự án là nhóm sinh
          viên thực hiện dự án và các bạn sinh viên đã tham gia, theo dõi các
          sản phẩm của dự án. Từ những gì các bạn tìm hiểu, đọc và nghe thì các
          bạn trau dồi thêm cho mình những thông tin bổ ích, rèn luyện thêm
          những kỹ năng cá nhân. Thêm vào đó là những kiến thức đúng đắn về
          thuốc lá điện tử và tác hại của nó, giúp cho các bạn nhận thức được
          mối nguy hiểm tiềm tàng của thuốc lá điện tử, qua đó biết cách phòng
          tránh và bảo vệ bản thân trước hiện tượng xã hội mới này.
        </p>
        <h2 className="project_chapter-h2">VI. QUÁ TRÌNH THỰC HIỆN</h2>
        <ul>
          <li>
            <p className="project_chapter-p">▪ Thuận lợi</p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  - Quá trình triển khai và thực hiện các hạng mục của dự án gần
                  đúng với tiến độ đã đề ra.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Các thành viên trong nhóm chủ động hỗ trợ nhau trong công
                  việc của từng Team.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Trong quá trình họp đưa ý tưởng hay góp ý, các thành viên
                  tích cực sôi nổi tham gia và đưa ra ý kiến cho từng sản phẩm
                  của dự án.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Trong quá trình diễn ra workshop, các thành viên đến đúng
                  giờ, thực hiện công tác chuẩn bị chu toàn.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Tinh thần đoàn kết của nhóm cao.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Trong mọi quyết định về nội dung khi thực hiện dự án, luôn
                  sử dụng phương thức bỏ phiếu, khi có 2/3 số thành viên nhóm
                  đồng ý thì nội dung đó mới được thực hiện.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">▪ Khó khăn</p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  - Trong những buổi họp hàng tuần, có thành viên vẫn tham gia
                  trễ. Thậm chí có 1 buổi họp đã được thông báo trước nhưng tới
                  lúc diễn ra có 4 thành viên không tham gia cuộc họp, trong đó
                  3 thành viên không tham gia được nhưng không báo vắng.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Kỷ luật của nhóm còn lỏng lẻo, nên còn tình trạng các thành
                  viên chưa tôn trọng nhau trong khi làm việc và trong thời gian
                  lên lớp.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Có tình trạng thành viên nhóm không sắp xếp được thời gian
                  giữa công việc nhóm và công việc cá nhân, làm ảnh hưởng đến
                  tiến độ dự án và bị dồn việc.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Khả năng kéo tương tác và thu hút của nhóm còn kém.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">▪ Bài học kinh nghiệm</p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  - Nên bình tĩnh xử lý các vấn đề xảy ra.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Chuẩn bị trước các phương án dự phòng, phòng khi có tình
                  huống phát sinh.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Trưởng nhóm quản lý chặt hơn các thành viên của nhóm, tránh
                  tình trạng không thông báo khi vắng họp hoặc trễ deadline.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Trưởng nhóm quan tâm, giúp đỡ và đưa ra giải pháp hỗ trợ cá
                  thành viên nhóm gặp khó khăn.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Cần kết nối tinh thần của nhóm nhiều hơn để tăng năng suất
                  và sự liên kết giữa các thành viên trong nhóm.
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Cần học và thực hành thêm kỹ năng giao tiếp để tương tác và
                  giao lưu với môi trường xung quanh.
                </p>
              </li>
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">
              ▪ Những kỹ năng nhóm đã áp dụng được trong quá trình thực hiện dự
              án
            </p>
            <TableContainer component={Paper}>
              <Table
                sx={{
                  minWidth: 650,
                  "& .MuiTableCell-head": {
                    border: "1px solid rgba(224, 224, 224, 1)",
                    fontWeight: "700",
                  },
                }}
                aria-label="simple table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell align="center">STT</TableCell>
                    <TableCell align="center">TÊN KỸ NĂNG</TableCell>
                    <TableCell align="center">GIẢI THÍCH</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {skills.map((item, index) => (
                    <TableRow
                      key={index}
                      sx={{
                        "& td, & th": {
                          border: "1px solid rgba(224, 224, 224, 1)",
                          fontSize: "16px",
                        },
                      }}
                    >
                      <TableCell component="th" scope="item" align="center">
                        {index + 1}
                      </TableCell>
                      <TableCell align="left">
                        {item.name.split("/n").map((i) => (
                          <p>{i}</p>
                        ))}
                      </TableCell>
                      <TableCell align="left">
                        {item.detail.split("/n").map((i) => (
                          <p>{i}</p>
                        ))}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </li>
        </ul>
        <h2 className="project_chapter-h2">V. KẾT QUẢ THU ĐƯỢC</h2>
        <ul>
          <li>
            <p className="project_chapter-p">
              ▪ Những kết quả thu được so với mục tiêu ban đầu của dự án
            </p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  - Thống kê số lượng sinh viên tiếp cận qua các sản phẩm của dự
                  án đạt hơn 200 lượt tham gia đến từ các bạn sinh viên, trong
                  dó:
                </p>
                <ul>
                  <li>
                    <p className="project_chapter-p">
                      + 42 lượt thích và 61 người theo dõi trên fanpage.
                    </p>
                    <img
                      className="project_chapter-img"
                      src={fanpage}
                      alt="Hình ảnh trích ra từ Fanpage “Wisdome Vape”"
                    />
                  </li>
                  <li>
                    <p className="project_chapter-p">
                      + 167 người điền form khảo sát “Mức độ nhận biết về thuốc
                      lá điện tử của sinh viên hiện nay”.
                    </p>
                    <img
                      className="project_chapter-img"
                      src={form}
                      alt="Hình ảnh trích ra từ Fanpage “Wisdome Vape”"
                    />
                  </li>
                  <li>
                    <p className="project_chapter-p">
                      + Website do chính các bạn team web (thành viên nhóm) tự
                      thiết kế:
                    </p>
                    <img
                      className="project_chapter-img"
                      src={website}
                      alt="Hình ảnh trích ra từ Fanpage “Wisdome Vape”"
                    />
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <p className="project_chapter-p">▪ Truyền thông của dự án</p>
            <ul>
              <li>
                <p className="project_chapter-p">
                  - Clip giới thiệu dự án nhóm:
                  <a href="https://youtu.be/plt3LtDCS7k" target="_blank">
                    Xem tại đây
                  </a>
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Nội dung bài viết truyền thông giới thiệu dự án:
                </p>
                <ul>
                  <li>
                    <p className="project_chapter-p">
                      📮Vape Wisdom Keeper xin chào mọi người!!!
                    </p>
                  </li>
                  <li>
                    <p className="project_chapter-p">
                      📌Chúng mình rất hân hạnh được gửi đến các bạn những thông
                      điệp về tác hại của thuốc lá điện tử. Fanpage này ra đời
                      với mục tiêu chia sẻ kiến thức và nhấn mạnh về các khía
                      cạnh độc hại mà hút thuốc điện tử có thể gây ra cho sức
                      khỏe con người.
                    </p>
                  </li>
                  <li>
                    <p className="project_chapter-p">
                      📩 Fanpage này cũng là nơi để các bạn thảo luận, đặt câu
                      hỏi và chia sẻ quan điểm về vấn đề này. Chúng mình rất
                      hoan nghênh mọi ý kiến đóng góp, vì chúng ta cùng nhau có
                      thể làm cho thế giới hiểu rõ hơn về tác hại của thuốc lá
                      điện tử.
                    </p>
                  </li>
                  <li>
                    <p className="project_chapter-p">
                      🔖Cảm ơn các bạn đã tham gia cùng chúng mình và hãy cùng
                      chia sẻ thông điệp về tác hại của thuốc lá điện tử giúp
                      lan toả đến cộng đồng nhé!
                    </p>
                  </li>

                  <li>
                    <p className="project_chapter-p">Trân trọng,</p>
                  </li>
                  <li>
                    <p className="project_chapter-p">Vape Wisdom Keeper ❤️‍🔥</p>
                  </li>
                </ul>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Fanpage về dự án của nhóm:
                  <a
                    href="https://facebook.com/vapewisdomkeeper"
                    target="_blank"
                  >
                    Xem tại đây
                  </a>
                </p>
              </li>
              <li>
                <p className="project_chapter-p">
                  - Những sản phẩm khác liên quan đến truyền thông:
                </p>
                <ul>
                  <li>
                    <p className="project_chapter-p">
                      + Website:{" "}
                      <a
                        href="https://vape-wisdom-keeper.onrender.com/"
                        target="_blank"
                      >
                        Xem tại đây
                      </a>{" "}
                      (https://vape-wisdom-keeper.onrender.com/)
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="project_chapter-h2">VI. NGUỒN TÀI LIỆU THAM KHẢO</h2>
        <p className="project_chapter-p">
          Ban biên tập Hello Bacsi, 02/06/2023. Thuốc lá điện tử là gì? Liệu nó
          có an toàn như quảng cáo?. Thuốc lá điện tử là gì?:
          <a
            href="https://hellobacsi.com/thoi-quen-lanh-manh/bo-thuoc-la/thuoc-la-dien-tu/"
            target="_blank"
          >
            https://hellobacsi.com/thoi-quen-lanh-manh/bo-thuoc-la/thuoc-la-dien-tu/
          </a>
        </p>
        <p className="project_chapter-p">
          Trương Vui, 23/05/2023. Xu hướng sử dụng thuốc lá điện tử ở Việt Nam
          đang gia tăng. Một số thực trạng tại Việt Nam:
          <a
            href="https://baodantoc.vn/xu-huong-su-dung-thuoc-la-dien-tu-o-viet-nam-dang-gia-tang-1684821922844.htm"
            target="_blank"
          >
            https://baodantoc.vn/xu-huong-su-dung-thuoc-la-dien-tu-o-viet-nam-dang-gia-tang-1684821922844.htm
          </a>
        </p>
      </Box>
      <Box sx={{ height: "100px" }}></Box>
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
