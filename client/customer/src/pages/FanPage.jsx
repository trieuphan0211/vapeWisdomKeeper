import React, { useEffect, useState } from "react";
import "../assets/css/FanPage.css";
import { getFeed } from "../services";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

export const FanPage = () => {
  const [feed, setFeed] = useState([
    {
      message:
        '🚫 Thực trạng sử dụng thuốc lá điện tử (e-cigarette) của giới trẻ hiện nay có sự biến đổi và phức tạp, tùy theo vùng và quốc gia cụ thể. Tuy nhiên, dưới đây là một số xu hướng chung về việc sử dụng e-cigarette trong giới trẻ:\n\n⚠️ Trong vài năm gần đây, e-cigarette đã trở nên rất phổ biến trong giới trẻ, đặc biệt ở các nước phát triển. Các sản phẩm này thường được quảng cáo là thay thế cho thuốc lá truyền thống hoặc là một cách "an toàn" hơn hút thuốc.\n\n⚠️ E-cigarette thường được thiết kế để hấp dẫn và thu hút giới trẻ thông qua màu sắc và hương vị đa dạng. Điều này đã khiến cho nhiều người trẻ trở thành người tiêu dùng của sản phẩm này.\n\n⚠️ Mặc dù có sự thay đổi từ thuốc lá truyền thống, e-cigarette vẫn không hoàn toàn an toàn và có thể gây hại cho sức khỏe. Hiện nay, có sự quan tâm ngày càng tăng đối với tác động của e-cigarette lên sức khỏe của giới trẻ, bao gồm nguy cơ gây nghiện, vấn đề về hô hấp và tác động âm tính khác.\n\n⚠️ Nhiều quốc gia đã ban hành các luật và quy định liên quan đến việc sử dụng và quảng cáo e-cigarette, đặc biệt đối với người dưới tuổi trưởng thành. Tuy nhiên, việc thực thi và giám sát luật pháp có thể gặp khó khăn. \n\n⚠️ Các chuyên gia y tế đã cảnh báo về nguy cơ sử dụng e-cigarette đối với sức khỏe và sự phụ thuộc. Các tác động sức khỏe dài hạn của việc hút e-cigarette vẫn cần được nghiên cứu thêm.\n\n⚠️ E-cigarette có thể tạo ra thói quen và tạo nên một loại nghiện khác. Giới trẻ có thể gặp khó khăn trong việc ngừng sử dụng e-cigarette sau khi đã bắt đầu.\n\n⁉️Tóm lại, việc sử dụng e-cigarette trong giới trẻ đang là một vấn đề quan trọng và cần được theo dõi chặt chẽ để bảo vệ sức khỏe của họ. Cần có sự hỗ trợ và giáo dục liên quan đến rủi ro của việc sử dụng e-cigarette và cách ngăn chặn nó trong cộng đồng giới trẻ.\n\nHãy share bài viết để nội dung này được nhiều người biết đến về " Thực trạng của Thuốc lá điện tử đang được giới trẻ lạm dụng như thế nào!"\n\n#VWK #thuocladientu #tachaicuathuocladientu #thuctrang',
      created_time: "2023-11-04T13:04:19+0000",
      full_picture:
        "https://scontent-hkt1-2.xx.fbcdn.net/v/t39.30808-6/397577614_122117048984078959_2571692630904607430_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zcXBWZ1mtagAX_3R2DG&_nc_ht=scontent-hkt1-2.xx&edm=AJdBtusEAAAA&oh=00_AfAxjFPqNtBaIIqvPpdR5SBuHIVeYtIlCBKSfNqL92UXdg&oe=6550C0CC",
      id: "143095222225874_122117049110078959",
    },
    {
      message:
        "📮Vape Wisdom Keeper xin chào mọi người!!!\n\n📌Chúng mình rất hân hạnh được gửi đến các bạn những thông điệp về tác hại của thuốc lá điện tử. Fanpage này ra đời với mục tiêu chia sẻ kiến thức và nhấn mạnh về các khía cạnh độc hại mà hút thuốc điện tử có thể gây ra cho sức khỏe con người.\n\n📩 Fanpage này cũng là nơi để các bạn thảo luận, đặt câu hỏi và chia sẻ quan điểm về vấn đề này. Chúng mình rất hoan nghênh mọi ý kiến đóng góp, vì chúng ta cùng nhau có thể làm cho thế giới hiểu rõ hơn về tác hại của thuốc lá điện tử.\n\n🔖Cảm ơn các bạn đã tham gia cùng chúng mình và hãy cùng chia sẻ thông điệp về tác hại của thuốc lá điện tử giúp lan toả đến cộng đồng nhé!\n\nTrân trọng,\nVape Wisdom Keeper ❤️‍🔥\n#thuocladientu #vape #vapewisdomkeeper",
      created_time: "2023-11-02T12:59:29+0000",
      full_picture:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/397602988_122116281350078959_7564437358426700580_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=3VimDpH63-8AX8f2etD&_nc_ht=scontent-hkt1-1.xx&edm=AJdBtusEAAAA&oh=00_AfBQMJXxK1PKhcV4gOOnu0SuChZh52Bo0ndGYGeqDsZpbQ&oe=65508F1C",
      id: "143095222225874_122116281356078959",
    },
    {
      message:
        "🚬 **THUỐC LÁ ĐIỆN TỬ (E-CIGARETTE) - Hiểu Về Sự Thay Đổi Trong Thế Giới Hút Thuốc** 🚬\n\nChào các bạn, hôm nay mình muốn nói về một chủ đề thú vị: Thuốc lá điện tử, hay còn gọi là e-cigarette. Bạn có bao giờ tự hỏi về những thiết bị này là gì và tại sao chúng đang trở nên phổ biến không?\n\n🤔 Thuốc Lá Điện Tử Là Gì?\nThuốc lá điện tử là một thiết bị điện tử giúp người dùng hít vào phổi một dạng hơi chứa nicotine và hương vị, thay vì khói từ thuốc lá truyền thống. Chúng hoạt động bằng cách biến đổi chất lỏng thành hơi qua nhiệt độ cao.\n\n🔍 Tại Sao Thuốc Lá Điện Tử Lại Được Ưa Chuộng?\n1. Giảm Hại Hơn?Một số người sử dụng thuốc lá điện tử nhằm giảm bớt tác động có hại của thuốc lá thường. Chúng ít tạo ra khói và không chứa các chất độc hại như than, gudron và khí CO.\n\n2. Hương Vị Đa Dạng:Có sẵn nhiều loại hương vị hấp dẫn cho người dùng, từ hương trái cây đến kem và cà phê, giúp họ thoải mái thử nghiệm và tìm ra sở thích riêng của mình.\n\n3. Dễ Sử Dụng: Thuốc lá điện tử dễ sử dụng và không cần tạo ra bụi. Chúng còn có thể sạc lại và tái sử dụng.\n\n🚨 Tuyệt Đối Cần Lưu Ý:\n- Dù có ít hại hơn, thuốc lá điện tử vẫn có rủi ro đối với sức khỏe, đặc biệt là đối với phổi.\n- Mùi hương ngọt ngào và thiết kế hấp dẫn của chúng có thể khiến thanh thiếu niên dễ bị kích thích thử nghiệm, dẫn đến nghiện nicotine.\n\n🤝 Hãy Cân Nhắc Cẩn Thận:Sử dụng thuốc lá điện tử là một quyết định quan trọng về sức khỏe của bạn. Hãy luôn tìm hiểu và thảo luận với chuyên gia y tế nếu bạn còn thắc mắc.\n\n#GiảiThíchThuốcLáĐiệnTử #SứcKhỏeCáNhân #CânNhắc #SựLựaChọn",
      created_time: "2023-10-29T13:56:10+0000",
      full_picture:
        "https://scontent-hkt1-1.xx.fbcdn.net/v/t39.30808-6/397324533_122114538074078959_2289835202955390544_n.jpg?stp=dst-jpg_p720x720&_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=NZ00YNKkK6kAX9pI2Am&_nc_ht=scontent-hkt1-1.xx&edm=AJdBtusEAAAA&oh=00_AfD-nVY47cIvN005Hi_wpV9mI29xqFylLz3m-ifKb2zzcg&oe=654FDFD4",
      id: "143095222225874_122114538218078959",
    },
  ]);
  // const dataFeed = async () => {
  //   const res = await getFeed();
  //   setFeed(res.feed.data);
  // };
  // useEffect(() => {
  //   dataFeed();
  // }, []);
  const [open, setOpen] = useState(false);
  const [selectedFeed, setSelectedFeed] = useState({});
  const handleOpen = (feedItem) => {
    setOpen(true);
    setSelectedFeed(feedItem);
  };
  const handleClose = () => setOpen(false);
  return (
    <div className="fanPage d-flex flex-column align-items-center">
      <h1 className="fanPage_header">Bài viết nổi bật</h1>
      {feed.map((item, index) => {
        return (
          <div
            className="fanPage_item"
            key={index}
            onClick={() => handleOpen(item)}
          >
            <img className="fanPage_item-img" src={item.full_picture}></img>
            <p className="fanPage_item-mes">{item.message}</p>
          </div>
        );
      })}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          borderRadius: "10px",
        }}
      >
        <Box
          classes="fanPage_item-modal"
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: 1000,
            bgcolor: "background.paper",
            boxShadow: 24,
            borderRadius: "10px",
            p: 4,
            height: "90%",
            overflowY: "scroll",
          }}
        >
          <img
            className="fanPage_item-img"
            src={selectedFeed?.full_picture}
          ></img>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {selectedFeed?.message}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
