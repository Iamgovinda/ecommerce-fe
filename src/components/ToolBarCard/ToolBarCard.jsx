import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./ToolBarCard.module.scss";
import WindowIcon from "@mui/icons-material/Window";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const ToolBarCard = (props) => {
    return (
        <Box
            className={styles["box-parent"]}
            sx={{ display: "flex", justifyContent: "space-between" }}
        >
            <Box className={styles["box-left"]}>
                <Typography className={styles["text-1"]}>
                    Ecommerce Acceories & Fashion item
                </Typography>
                <Typography className={styles["text-2"]}>
                    About 9,620 results (0.62 seconds)
                </Typography>
            </Box>
            <Box className={styles["box-right"]}>
                <Box className="box-1">
                    <span>per page: </span>{" "}
                    <input type="text" style={{ width: "2.5rem" }} />
                </Box>
                <Box className="box-2">
                    <span>Sort By:</span>{" "}
                    <select name="" id="">
                        <option value="">opt1</option>
                        <option value="">opt1</option>
                        <option value="">opt1</option>
                    </select>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <span>View: </span> <WindowIcon
                        onClick={()=>props.setView('Grid') }
                        className={styles['grid-view']}
                    /> <FormatListBulletedIcon
                        onClick={()=>props.setView('List') }
                        className={styles['list-view']}
                    />
                    <input type="text" style={{ width: "5rem", marginLeft: "1rem" }} />
                </Box>
            </Box>
        </Box>
    );
};

export default ToolBarCard;
