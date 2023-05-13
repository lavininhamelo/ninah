import { useRouter } from "next/router";
import tw from "twin.macro";
import { Icon } from "@/components/ui";
import useTheme from "@/hooks/useTheme";

const MenuOption = tw.div`items-center gap-4 text-xl md:text-base`;
const SelectLanguage = tw.select`bg-transparent`;

export const MenuOptions: React.FC<React.HTMLAttributes<HTMLDivElement>> = (props) => {
    const router = useRouter();
  
    const { toggleTheme, theme } = useTheme();
    const iconName = theme === "dark" ? "light_mode" : "dark_mode";
  
    const handleLocaleChange = (event: any) => {
      const value = event.target.value;
  
      router.push(router.route, router.asPath, {
        locale: value,
      });
    };
  
    return (
      <MenuOption {...props}>
        <SelectLanguage onChange={handleLocaleChange} value={router.locale}>
          <option value="en">EN-US</option>
          <option value="pt-BR">PT-BR</option>
        </SelectLanguage>
        <Icon onClick={() => toggleTheme()} type="outlined">
          {iconName}
        </Icon>
      </MenuOption>
    );
  };