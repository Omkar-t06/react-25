import React, { useState } from 'react'

const data = [
    {
      id  : '1',
      question: "What are accordion components?",
      answer:
        "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
    },
    {
      id  : '2',
      question: "What are they used for?",
      answer:
        "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
    },
    {
      id  : '3',
      question: "Accordion as a musical instrument",
      answer:
        "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
    },
    {
      id  : '4',
      question: "Can I create an accordion component with a different framework?",
      answer:
        "Yes of course, it is very possible to create an accordion component with another framework.",
    },
];


function Accordian() {
    const [enableMultiSelection, setenableMultiSelection] = useState(false);
    const [selected, setSelected] = useState(null);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelect = (id) => {
        if (selected === id) {
            setSelected(null);
        } else {
            setSelected(id);
        }
    }

    const handleMultiSelection = (id) => {
        if (selectedItems.includes(id)) {
            setSelectedItems(selectedItems.filter(itemId => itemId !== id))
        } else {
            setSelectedItems([...selectedItems, id])
        }
    }
    
  return (
    <div className='flex flex-col justify-center items-center gap-5 h-screen w-screen'>
        <button 
            className='px-2.5 py-5 bg-[#614101] text-white cursor-pointer'
            onClick={() => setenableMultiSelection(!enableMultiSelection)}
        >
            {enableMultiSelection? 'Disable' : 'Enable'} Multi Selection
        </button>
        <div className='w-xl'>
            {
                data && data.length > 0 ? data.map((item, index) => (
                    <div
                        className='bg-[#614101] mb-2.5 px-2.5 py-5'
                        key={index}
                    >
                        <div 
                            className='text-white flex justify-between items-center cursor-pointer'
                            onClick={() => enableMultiSelection ? 
                                handleMultiSelection(item.id) : 
                                handleSelect(item.id)
                            }
                        >
                            <h3>{item.question}</h3>
                            <span>+</span>
                        </div>
                        {enableMultiSelection ? 
                        selectedItems.indexOf(item.id) !== -1 && <div className='text-white h-auto border-t-amber-100 border-t-2'>
                            {item.answer}
                        </div>
                        : selected === item.id && <div className='text-white h-auto border-t-amber-100 border-t-2'>
                            {item.answer}
                        </div>
                        }
                    </div>
                )) : <div>No data found</div>
            }
        </div>
    </div>
  )
}

export default Accordian