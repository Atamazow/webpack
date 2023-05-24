import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import React, { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface SidebarProps {
  className?: string;
}
export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toogle</button>
      <div className={cls.switchers}>
        <LangSwitcher className={cls.lang} />
        <ThemeSwitcher />
      </div>
    </div>
  );
}
