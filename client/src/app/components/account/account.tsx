import { useLogout } from "@/hooks/useLogout";

type Props = {};
export default function AccountOpt({}: Props) {
  const logout = useLogout();

  return (
    <div className="absolute bg-white text-zinc-500 rounded-md mt-3 px-6 py-3">
      <ul className="flex flex-col gap-2">
        <li className="cursor-pointer">Profile</li>
        <li className="cursor-pointer">Seller</li>
        <li className="cursor-pointer">Info</li>
        <li className="cursor-pointer" onClick={() => logout()}>
          Logout
        </li>
      </ul>
    </div>
  );
}
