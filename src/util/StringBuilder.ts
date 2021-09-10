export default class StringBuilder {

    static concat(a : StringBuilder, b : StringBuilder) {
        return new StringBuilder(a.toString() + b.toString());
    }

    constructor(private text : string = "") {}

    append(text : string) {
        this.text += text ?? "";
    }

    appendLine(text : string) {
        this.text += `${text ?? ""}\n`;
    }

    concat(source : StringBuilder, transform = true) : StringBuilder {
        if (transform) {
            this.text += source.text;
            return this;
        } else
            return StringBuilder.concat(this, source);
    }

    toString() : string {
        return this.text;
    }

}
