import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import {LangSwitcher} from "shared/ui/LangSwitcher/LangSwitcher";

interface SidebarProps {
    className?: string
}
export function Sidebar({className}: SidebarProps) {


  return (
    <div className={classNames(cls.Sidebar, {}, [className])}>
        <LangSwitcher className={cls.lang}/>
    </div>
  );
}
