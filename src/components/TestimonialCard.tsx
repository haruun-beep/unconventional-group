interface Props {
  name: string;
  company: string;
  quote: string;
}

export default function TestimonialCard({ name, company, quote }: Props) {
  return (
    <div className="bg-bg border-l-2 border-neon p-6 rounded-r-lg card-hover-border">
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-neon text-base">★</span>
        ))}
      </div>
      <p className="text-white/85 text-sm leading-relaxed mb-5">"{quote}"</p>
      <div>
        <p className="font-semibold text-white text-sm">{name}</p>
        <p className="text-white/50 text-xs">{company}</p>
      </div>
    </div>
  );
}
