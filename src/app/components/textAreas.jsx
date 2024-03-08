import TextArea from "antd/es/input/TextArea";

export default function TextAreas({ className, defaultValue }) {
    return (
        <TextArea
            className={className}
            placeholder=""
            variant="borderless"
            defaultValue={defaultValue}
            autoSize
        />
    )
}