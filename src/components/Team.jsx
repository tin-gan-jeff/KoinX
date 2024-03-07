import React from 'react'

const Team = () => {
    const members = [
        {
            image: "https://www.mnp.ca/-/media/foundation/integrations/personnel/2020/12/16/13/57/personnel-image-4483.jpg?h=800&w=600&hash=9D5E5FCBEE00EB562DCD8AC8FDA8433D",
            name: "John Smith",
            role: "Designation here",
            bio: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." 
        },
        {
            image: "https://engineering.unl.edu/images/staff/Kayla-Person.jpg",
            name: "Elina Williams",
            role: "Designation here",
            bio: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." 
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/2/23/Photo_portrait_PP.jpg",
            name: "Discode Jeff",
            role: "Designation here",
            bio: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc." 
        }
    ]
  return (
    <div className="rounded-md lg:p-4 p-2 bg-white">
      <p className="text-[#0b1426] font-semibold text-[18px]">
          Team
        </p>
        <p className="text-[#0b1426] mt-2 text-[13px] text-justify">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <div className="space-y-4 mt-4">
            {
                members.map((member, index) => (
                    <div className="bg-[#cbe8fd8a] p-4 lg:space-x-4 items-center rounded-md lg:flex lg:flex-row" key={index}>
                        <div className="flex flex-col items-center">
                            <img src={member.image} className="w-20 h-[89px] rounded-md" alt="member" />
                            <p className="text-[#0b1426] text-[12px] font-bold mt-1">{member.name}</p>
                            <p className="text-gray-400 text-[10px] font-medium">{member.role}</p>
                        </div>
                        <p className="text-[#0b1426] text-justify text-[13px] flex-1">{member.bio}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Team
