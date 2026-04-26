import { STATS_DATA } from '@/utils/constants';

export default function Stats() {
  return (
    <section className="w-100 bg-brand-500">
      <div className="container max-w-7xl px-4 py-5">
        <div className="row text-center text-white g-4">
          {STATS_DATA.map((stat, index) => (
            <div key={index} className="col-6 col-md-4 stat-item">
              <p className="fs-2 fw-bold mb-0">{stat.value}</p>
              <p className="small opacity-75 mt-2 mb-0">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
