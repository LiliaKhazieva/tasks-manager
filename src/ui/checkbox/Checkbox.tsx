import { Checkbox } from "radix-ui";
import { CheckIcon } from "@radix-ui/react-icons";
import styles from "./Checkbox.module.scss";

interface IProps {
  id: string;
  checked: boolean;
  onClick: () => void;
}

export function CheckboxContainer({ id, checked, onClick }: IProps) {
  return (
    <Checkbox.Root
      className={
        checked === false ? `${styles.Root}` : `${styles.Root} ${styles.check}`
      }
      id={id}
      onClick={onClick}
      checked={checked}
    >
      {checked === false ? (
        ""
      ) : (
        <CheckIcon width={16} height={16} className={styles.checkIcon} />
      )}
    </Checkbox.Root>
  );
}
