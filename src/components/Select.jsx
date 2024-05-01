import React from "react";
import {
  FormControl,
  InputLabel,
  Select as MUISelect,
  MenuItem,
  ListSubheader,
  OutlinedInput,
  Chip,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import PropTypes from "prop-types";

const Select = ({ label, value, onChange, options, mode }) => {
  const isMultiple = mode === "multiple";

  const handleDelete = (itemValue) => {
    const newValue = isMultiple ? value.filter((val) => val !== itemValue) : [];

    const event = {
      target: {
        value: newValue,
        name: label,
      },
    };
    onChange(event);
  };

  return (
    <FormControl fullWidth sx={{ my: 0.5 }}>
      <InputLabel>{label}</InputLabel>
      <MUISelect
        label={label}
        multiple={isMultiple}
        value={value}
        onChange={onChange}
        input={isMultiple ? <OutlinedInput label={label} /> : undefined}
        renderValue={
          isMultiple
            ? (selected) => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {selected.map((value) => (
                    <Chip
                      key={value}
                      label={value}
                      onDelete={() => handleDelete(value)}
                      deleteIcon={<CancelIcon />}
                      style={{ margin: 2 }}
                    />
                  ))}
                </div>
              )
            : undefined
        }
        MenuProps={{
          getcontentanchorel: null,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
          transformOrigin: {
            vertical: "top",
            horizontal: "left",
          },
        }}
      >
        {options.map((group) => [
          <ListSubheader key={`header-${group.groupLabel}`}>
            {group.groupLabel}
          </ListSubheader>,
          group.items.map((item) => (
            <MenuItem key={item.value} value={item.value}>
              {item.label}
            </MenuItem>
          )),
        ])}
      </MUISelect>
    </FormControl>
  );
};

Select.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    ),
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      groupLabel: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          label: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  mode: PropTypes.oneOf(["single", "multiple"]),
};

export default Select;
