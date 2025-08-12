import { Checkbox } from "radix-ui";
import styles from "./Checkbox.module.scss";
import { CheckIcon } from "@radix-ui/react-icons";

export function CheckboxContainer({ checked, onChange }) {
  return (
    <form>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox.Root
          className={styles.Root}
          id="c1"
          checked={checked}
          onChange={onChange}
        >
          <Checkbox.Indicator className={styles.Indicator}>
            <CheckIcon width={16} />
          </Checkbox.Indicator>
        </Checkbox.Root>
      </div>
    </form>
  );
}
