import { Avatar } from "./Avatar";
import {
  GithubIcon,
  HomeIcon,
  InstagramIcon,
  QiitaIcon,
  SpeakerDeckIcon,
  XIcon,
} from "./icons";

export const Profile = () => {
  return (
    <div
      class={
        "border border-gray-300 dark:border-gray-600 rounded-3xl flex p-6 my-10 gap-6 items-center dark:text-gray-100"
      }
    >
      <Avatar src="/static/assets/avatar.webp" />
      <div class={"flex flex-col gap-3"}>
        <div class="flex gap-2">
          <span class={"font-bold"}>Tomoki Ota</span>
        </div>
        <p class={"text-sm"}>
          フルスタックエンジニア。Goが好き。趣味はカメラと旅行です📷
        </p>
        <div class={"flex gap-2 items-center"}>
          <a href="https://tomomon.jp" target="_blank" rel="noreferrer">
            <HomeIcon />
          </a>
          <a href="https://x.com/tomomon1227" target="_blank" rel="noreferrer">
            <XIcon />
          </a>
          <a
            href="https://github.com/tomo1227"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.instagram.com/tomomon1227"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://qiita.com/twrcd1227"
            target="_blank"
            rel="noreferrer"
          >
            <QiitaIcon />
          </a>
          <a
            href="https://speakerdeck.com/tomo1227"
            target="_blank"
            rel="noreferrer"
          >
            <SpeakerDeckIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
