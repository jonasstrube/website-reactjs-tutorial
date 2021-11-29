import { Headline } from "./Headline.js";
import { Paragraph } from "./Paragraph.js";

export class Message extends React.Component {
    render(){
        return(
            <div>
                <Headline headline={this.props.headline}/>
                <Paragraph text={this.props.text}/>
            </div>
        )
    }
}