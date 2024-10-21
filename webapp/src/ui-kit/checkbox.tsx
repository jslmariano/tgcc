import { ComponentPropsWithoutRef, ReactElement, KeyboardEvent } from "react";
import styled from "styled-components";
import { Text } from "@/ui-kit/text";

type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
  id: string;
  value: string;
  label: string;
  "aria-checked"?: boolean;
  $isChecked: boolean;
  handleCheckboxChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledCheckbox = styled.input`
  -webkit-appearance: none;
  appearance: none;
  background-color: ${({ theme }) => theme.colors.blank};
  margin: 0;
  font: inherit;
  color: currentColor;
  border-radius: 2px;
  border: 1px solid ${({ theme }) => theme.colors.shadesSpindle};
  display: grid;
  place-content: center;
  width: 14px;
  height: 14px;

  &::before {
    content: "";
    width: 8px;
    height: 8px;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1em 1em ${({ theme }) => theme.colors.irisBlue};
    border-radius: 1.5px;
  }

  &:checked::before {
    transform: scale(1) !important;
  }
`;

const Wrapper = styled.div<{ $isChecked: boolean }>`
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors.shadesSpindle};
  background: ${({ theme }) => theme.colors.blank};
  padding: 10px 13px;

  outline-width: 1.5px;
  outline-offset: 3px;
  outline-style: none;

  label {
    cursor: pointer;
    user-select: none;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.linkWater};

    & ${StyledCheckbox} {
      border: 1px solid
        ${({ $isChecked, theme }) =>
          $isChecked ? theme.colors.shadesSpindle : theme.colors.irisBlue};
    }
  }

  &:focus {
    outline-style: solid;
    outline-color: ${({ theme }) => theme.colors.irisBlue};

    & ${StyledCheckbox} {
      border: 1px solid ${({ theme }) => theme.colors.irisBlue};
    }
  }
`;

const Checkbox = (props: CheckboxProps): ReactElement => {
  const { $isChecked, handleCheckboxChange, id, value, label, ...rest } = props;

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      handleCheckboxChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    }

    if (event.key === " ") {
      event.preventDefault();
      handleCheckboxChange(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    }
  };

  return (
    <Wrapper
      tabIndex={0}
      $isChecked={$isChecked}
      onClick={(event) => {
        handleCheckboxChange(
          event as unknown as React.ChangeEvent<HTMLInputElement>
        );
      }}
      onKeyDown={handleKeyDown}
    >
      <label htmlFor={id}>
        <Text $variant="bodySmallSemi">{label}</Text>
      </label>
      <StyledCheckbox
        type="checkbox"
        id={id}
        value={value}
        checked={$isChecked}
        onChange={handleCheckboxChange}
        tabIndex={-1}
        role="checkbox"
        aria-checked={$isChecked}
        aria-label={label}
        {...rest}
      />
    </Wrapper>
  );
};

export default Checkbox;
