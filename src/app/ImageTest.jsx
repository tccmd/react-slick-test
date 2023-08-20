import { datas } from './datas'
import Image from "next/image"

export default function ImageTest() {
    return (
        <div>
            {datas.map((data) => (
                <div key={data.id}>
                    <h2>{data.title}</h2>
                    <div>
                        {data.contents.map((content, idx) => (
                            <div key={idx}>
                                <h3>{content.name}</h3>
                                <Image src={content.img} alt={content.name} width={300} height={200} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
