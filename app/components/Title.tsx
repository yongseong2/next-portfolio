import Text from "./Text";
import { PROFILE } from "../src/constants";

export default function Title() {
  const imageSrc =
    "https://github.com/yongseong2/next-portfolio/assets/122865525/30b95135-9789-4d1b-bdb4-96fabfaa4bf9";
  return (
    <div>
      <Text type="h1" className="mb-10">
        👨🏻‍💻 포트폴리오
      </Text>

      <div className="flex justify-between">
        <div className="w-4/6 break-words">
          <Text type="h2" className="title mb-2">
            {PROFILE.TITLE}
          </Text>
          <div className="description mb-5">
            <Text type="b">{PROFILE.DESCRIPTION}</Text>
          </div>
          <div className="contact-channels mb-5">
            <Text type="h3" className="mb-2">
              Contact & Channels
            </Text>
            <Text>
              {PROFILE.CONTACT_INFO.EMAIL}
              <br />
              {PROFILE.CONTACT_INFO.PHONE}
              <br />
              {PROFILE.CONTACT_INFO.GITHUB}
              <br />
              {PROFILE.CONTACT_INFO.BIRTH}
            </Text>
          </div>
        </div>
        <div
          className={`rounded-full overflow-hidden bg-cover bg-center bg-no-repeat`}
          style={{
            width: 250,
            height: 250,
            backgroundImage: `url(${imageSrc})`,
          }}
        />
      </div>
    </div>
  );
}
