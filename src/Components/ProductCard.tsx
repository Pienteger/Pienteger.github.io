const ProductCard: React.FC<ProductCardProps> = ({ name, icon, tagline, description, link, linkText }) => {
    return (
        <div className="product-card">
            <div className='flex gap-2'>
                <img src={icon}
                    className='h-14 w-14' />
                <div className='flex flex-col'>
                    <span className='text-2xl font-bold'>{name}</span>
                    <span className='text-sm text-gray-500'>{tagline}</span>
                </div>
            </div>
            <p>
                {description}
            </p>
            {
                link &&
                <a href={link} target="_blank"
                    className='font-bold hover:underline'>
                    {
                        linkText ? linkText : "Learn More"
                    }
                </a>
            }
        </div>
    );
};

export default ProductCard;