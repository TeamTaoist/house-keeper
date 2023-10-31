import styled from "@emotion/styled";
import { Title, Host, TimeBox, Intro } from "./style";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function ManageHouseInner({
  children,
  ...rest
}: {
  children?: React.ReactNode;
  [k: string]: any;
}) {
  return (
    <HouseColumnCard
      onClick={() =>
        window.open(`${window.location.origin}/#/hacker-house/${1}`, "_blank")
      }
      {...rest}
    >
      <Title>Build dApps on Vara Network</Title>
      <img
        className="banner"
        src="https://www.stylearena.net/wp-content/uploads/2015/04/cute-cat-in-jeans-1024x640.jpg"
        alt=""
      />
      <TimeBox>
        <div>
          <AccessTimeIcon />
          <span>Sep 16 - Sep 22，2023</span>
        </div>
        <div>
          <LocationOnIcon />
          <span>Shanghai, China</span>
        </div>
      </TimeBox>
      <Host>
        <span> Host By</span>
        <span>
          <img
            src="	https://img0.baidu.com/it/u=187070227,2985336747&fm=253&fmt=auto&app=138&f=JPEG?w=498&h=500"
            alt=""
          />
        </span>
        <span>Cat Community</span>
      </Host>
      <Intro>
        <p>
          As a leader in innovation, Gear's Hacker House will put you at the
          forefront of Web3 technology, building decentralized applications on
          the Vara Network and pushing the limits of innovation!{" "}
        </p>
        <p>
          As a leader in innovation, Gear's Hacker House will put you at the
          forefront of Web3 technology, building decentralized applications on
          the Vara Network and pushing the limits of innovation!{" "}
        </p>
      </Intro>
      {children}
    </HouseColumnCard>
  );
}

const HouseColumnCard = styled.div`
  padding: 16px;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
  cursor: pointer;
  img.banner {
    width: 100%;
    margin-block: 8px;
  }
  border-radius: 8px;
`;
