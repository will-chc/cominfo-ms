import { useMemo, useState } from 'react'
import { createEditor } from 'slate'
import {Slate ,Editable,withReact} from 'slate-react'
import { BaseEditor, Descendant } from 'slate'
import { ReactEditor } from 'slate-react'

//typeScript类型声明
type CustomElement = { type: 'paragraph'; children: CustomText[] }
type CustomText = { text: string }
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor
    Element: CustomElement
    Text: CustomText
  }
}

function SlateQuill(){

    //初始值
    const initialValue = [
        {
          type: 'paragraph',
          children: [{ text: 'A line of text in a paragraph.' }],
        },
      ]

    //编辑器实例对象
    const editor = useMemo(()=>withReact(createEditor()),[])
    
    const [value,setValue] = useState(initialValue)

    return (
        <>
        <Slate 
            editor={editor}
            value={value}
            onChange={newValue => setValue(newValue)}
        >
            <Editable/>
        </Slate>
        </>
    )
}
export default SlateQuill