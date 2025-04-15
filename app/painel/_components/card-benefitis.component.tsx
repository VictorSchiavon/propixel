// src/components/Card.js

const CardBenefitsComponent = ({ title, content, icon}: any) => {
    return (
        <div key={title} className="flex-1 bg-[#151515] rounded-xl p-6 flex flex-col">
            <div className="w-12 h-12 bg-[#462408] mb-4  flex items-center justify-center rounded-full">
                {icon}
            </div>
            <h3 className="text-md font-semibold">{title}</h3>
            <p className="text-gray-500 text-xs pt-1">{content}</p>
        </div>
    );
};

export default CardBenefitsComponent;