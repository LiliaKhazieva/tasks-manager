import { Checkbox } from "radix-ui";
import styles from "./Checkbox.module.scss";
import { CheckIcon } from "@radix-ui/react-icons";

export function CheckboxContainer() {
  return (
    <Checkbox.Root className={styles.Root} defaultChecked id="c1">
      <Checkbox.Indicator className={styles.Indicator}>
        <CheckIcon />
      </Checkbox.Indicator>
    </Checkbox.Root>
  );
}
