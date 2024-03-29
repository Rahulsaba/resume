import { Input } from 'antd';


export default function Inputs({ defaultValue, prefix, className }) {

    return (
        <Input
            className={className}
            placeholder=""
            variant="borderless"
            defaultValue={defaultValue}
            prefix={prefix}
        />
    )
}