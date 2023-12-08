import React, { useEffect } from "react";
import "../assets/scss/ProjectPage.scss";
import { Box } from "@mui/material";
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
    handleOpen();
  }, []);
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
          DỰ ÁN TÁC HẠI CỦA THUỐC LÁ ĐIỆN TỬ ĐỐI VỚI SỨC KHỎE
        </h1>
        <Box className="project_detail-intro">
          <h4 className="project_detail-intro-header">
            Tính cấp thiết của dự án
          </h4>
          <p className="project_detail-intro-p">
            Hiện nay, công tác phòng, chống tác hại của thuốc lá được các cơ sở
            giáo dục chú trọng triển khai, trên cả nước tỷ lệ sử dụng thuốc lá ở
            tuổi thanh thiếu niên đã giảm qua các năm (ở độ tuổi 15-24: giảm từ
            26% vào năm 2013 xuống 13% vào năm 2019; trong độ tuổi học sinh
            13-17: giảm từ 5,36% vào năm 2013 xuống 2,78% vào năm 2019).
            <br />
            <br /> Tuy nhiên thực trạng sử dụng các sản phẩm thuốc lá vẫn còn
            xảy ra trong và ngoài nhà trường. Gần đây, Bệnh viện Bãi Cháy (tỉnh
            Quảng Ninh) đã tiếp nhận 4 học sinh (sinh năm 2008) nhập viện với
            các triệu chứng ngộ độc sau khi sử dụng thuốc lá điện tử; Trường
            THCS Thạch Kim (Lộc Hà - Hà Tĩnh) phát hiện 61 học sinh tham gia hút
            thuốc lá điện tử, chủ yếu là học sinh lớp 6, lớp 7;... Đây là hồi
            chuông cảnh báo cho thấy việc sử dụng các sản phẩm thuốc lá mới như
            thuốc lá điện tử đang có dấu hiệu gia tăng trong trường học.
          </p>
          <h4 className="project_detail-intro-header">Mục tiêu của dự án</h4>
          <p className="project_detail-intro-p">
            Mục tiêu của dự án tác hại của thuốc lá điện tử là tăng cường nhận
            thức và cung cấp thông tin về các tác hại của việc sử dụng thuốc lá
            điện tử. Dự án này nhằm giúp người dùng hiểu rõ hơn về những rủi ro
            và hậu quả của việc hút thuốc lá điện tử đối với sức khỏe cá nhân và
            cộng đồng.
          </p>
          <p className="project_detail-intro-p">
            Các mục tiêu cụ thể của dự án có thể bao gồm:
          </p>
          <ol className="project_detail-intro-p">
            <li>
              Tăng cường nhận thức: Cung cấp thông tin chi tiết về thành phần
              của thuốc lá điện tử, những chất gây hại có trong nó và tác động
              của chúng đến sức khỏe.
            </li>
            <li>
              Giảm sử dụng thuốc lá điện tử: Thông qua việc cung cấp thông tin
              và tạo ra các chiến dịch giáo dục, dự án nhằm giảm sự sử dụng
              thuốc lá điện tử và thúc đẩy các biện pháp hỗ trợ để từ bỏ nó.
            </li>
            <li>
              {" "}
              Tăng cường quy định và kiểm soát: Dự án có thể tập trung vào việc
              đề xuất và thúc đẩy các biện pháp quản lý và kiểm soát việc sản
              xuất, quảng cáo và bán hàng của thuốc lá điện tử.
            </li>
            <li>
              {" "}
              Hỗ trợ người dùng: Dự án có thể cung cấp các tài liệu hướng dẫn và
              tư vấn cho những người muốn từ bỏ thuốc lá điện tử, cung cấp thông
              tin về các phương pháp hỗ trợ và chương trình giúp họ thành công
              trong quá trình từ bỏ.
            </li>
            <li>
              Nghiên cứu và đánh giá: Dự án có thể thực hiện nghiên cứu và đánh
              giá về tác động của thuốc lá điện tử đến sức khỏe và xã hội, từ đó
              cung cấp căn cứ khoa học cho các biện pháp quản lý và chính sách
              liên quan.
            </li>
          </ol>
          <p className="project_detail-intro-p">
            Tổng quát, mục tiêu của dự án tác hại của thuốc lá điện tử là giảm
            thiểu việc sử dụng và tăng cường nhận thức về tác động tiêu cực của
            nó, nhằm bảo vệ sức khỏe và cải thiện chất lượng cuộc sống của cộng
            đồng.
          </p>
          <p className="project_detail-intro-p">
            Nhóm cũng làm một số khảo sát nhỏ về sự hiểu biết và tác hại của
            thuốc lá điện tử của sinh viên Văn Lang và theo như kết quả thì các
            bạn hầu như đều biết thuốc lá điện tử nhưng chưa thực sự rõ về tác
            hại nghiêm trọng của nó. Hiểu được vấn đề này nhóm chúng mình đã
            cùng nhau tạo nên dự án “ The Vape wisdom Keeper” với mong muốn giúp
            các bạn hiễu rõ tác hại của thuốc lá điện tử và cùng đồng hành với
            các bạn từ bỏ thói quen độc hại này.
          </p>
          <p className="project_detail-intro-p">
            Sau khoảng thời gian triển khai thực hiện dự án, tụi mình cũng đã tổ
            chức được các hoạt động tuyên truyền như:
            <br />
            <br />
            Tổ chức một buổi Workshop với chuyên đề “chưa có nhé” để sinh viên
            tham gia trao đổi, thảo luận và lắng nghe những chia sẻ hữu ích của
            diễn giả về vấn đề sức khỏe ảnh hưởng từ vape <br />
            <br />
            Nhóm mình có tạo một fanpage và trang web cho các bạn trẻ để các bạn
            trao đổi cũng như giải đáp thắc mắc
            <br />
            <br /> Mong rằng dự án của chúng mình góp một phần nhỏ vào các dự án
            cộng đồng và được các bạn ủng hộ để chúng mình có thêm động lực phát
            triển và duy trì dự án trong tương lai.
          </p>
          <h4 className="project_detail-intro-header">
            Mọi thông tin chi tiết xin vui lòng liên hệ:
          </h4>
          <p className="project_detail-intro-p">
            <span>Fanpage: </span>
            <a href="https://www.facebook.com/vapewisdomkeeper">
              The Vape Wisdom Keeper
            </a>
          </p>
          <p className="project_detail-intro-p">
            <span>Website: </span>
            <a href="https://vape-wisdom-keeper.onrender.com">
              {" "}
              Home | The Vape Wisdom Keeper
            </a>
          </p>
        </Box>
        <h1 className="project_detail-header">KẾ HOẠCH VÀ BÁO CÁI DỰ ÁN</h1>
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
