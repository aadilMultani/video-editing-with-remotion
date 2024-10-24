import './style.css';

interface SidebarProps {
    templates: {
        id: number;
        image: string;
        text: string;
    }[];
}

const Sidebar: React.FC<SidebarProps> = ({ templates }) => {
    return (
        <div className="sidebar">
            <h2>Video Editor</h2>
            <hr />
            <div className='template-grid'>
                {templates.map((template) => (
                    <div key={template.id} className="template">
                        <video src={template.image} />
                        <div className="template-info">
                            <h3>{template.text}</h3>
                            <p>00:10</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;