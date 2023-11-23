import Link from "next/link";
import Text from "./Text";

export default function SideBar() {
  return (
    <div className="w-full p-5 flex-col">
      <Link href={"/"}>
        <Text type="h3">KSY</Text>
      </Link>
    </div>
  );
}
