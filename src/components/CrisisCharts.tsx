import React from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, AreaChart, Area } from 'recharts';
import { TrendingUp, Users, AlertTriangle } from 'lucide-react';

const breadPrices = [
  { year: '1914', price: 100 },
  { year: '1915', price: 150 },
  { year: '1916', price: 300 },
  { year: 'Фев 1917', price: 700 },
  { year: 'Окт 1917', price: 1500 },
];

const desertionData = [
  { year: '1914', count: 0 },
  { year: '1915', count: 0.01 },
  { year: '1916', count: 0.1 },
  { year: '1917', count: 1.5 },
];

const garrisonSupport = [
  { month: 'Март', bolsheviks: 10, provisional: 80, neutral: 10 },
  { month: 'Июль', bolsheviks: 30, provisional: 50, neutral: 20 },
  { month: 'Сентябрь', bolsheviks: 60, provisional: 20, neutral: 20 },
  { month: 'Октябрь', bolsheviks: 85, provisional: 5, neutral: 10 },
];

const CrisisCharts: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      <div className="text-center mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-red-700 mb-2 block">Аналитика</span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 serif mb-4">Кризис в цифрах</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">Экономические и социальные показатели, наглядно демонстрирующие причины краха империи и радикализации общества.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Bread Prices Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xl shadow-black/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-50 rounded-2xl">
              <TrendingUp className="text-red-700" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold serif text-slate-900">Индекс цен на хлеб</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">1914 = 100%</p>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={breadPrices} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" vertical={false} />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ color: '#b91c1c', fontWeight: 'bold' }}
                />
                <Line type="monotone" dataKey="price" name="Индекс цен" stroke="#b91c1c" strokeWidth={4} dot={{ r: 6, fill: '#b91c1c', strokeWidth: 2, stroke: '#fff' }} activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-500 serif mt-6 leading-relaxed">
            Гиперинфляция и продовольственный кризис стали главными триггерами Февральской революции. К октябрю цены выросли в 15 раз по сравнению с довоенными.
          </p>
        </motion.div>

        {/* Desertion Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white border border-stone-200 rounded-3xl p-8 shadow-xl shadow-black/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-stone-100 rounded-2xl">
              <AlertTriangle className="text-stone-600" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold serif text-slate-900">Дезертирство с фронта</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">В миллионах человек</p>
            </div>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={desertionData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" vertical={false} />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} dx={-10} />
                <Tooltip 
                  contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f5f5f4' }}
                  formatter={(value: number) => [`${value} млн`, 'Дезертиры']}
                />
                <Bar dataKey="count" name="Дезертиры (млн)" fill="#44403c" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-500 serif mt-6 leading-relaxed">
            Усталость от войны и Приказ №1 привели к массовому бегству солдат с фронта. Вооруженные крестьяне возвращались домой делить землю.
          </p>
        </motion.div>

        {/* Garrison Support Area Chart */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 bg-white border border-stone-200 rounded-3xl p-8 shadow-xl shadow-black/5"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-red-50 rounded-2xl">
              <Users className="text-red-700" size={24} />
            </div>
            <div>
              <h3 className="text-xl font-bold serif text-slate-900">Политические симпатии Петроградского гарнизона</h3>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Динамика поддержки в 1917 году (%)</p>
            </div>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={garrisonSupport} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorBolsheviks" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#b91c1c" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#b91c1c" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorProvisional" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#44403c" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#44403c" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#a8a29e', fontSize: 12 }} dx={-10} />
                <CartesianGrid strokeDasharray="3 3" stroke="#f5f5f4" vertical={false} />
                <Tooltip contentStyle={{ borderRadius: '1rem', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }} />
                <Legend verticalAlign="top" height={36} iconType="circle" />
                <Area type="monotone" dataKey="bolsheviks" name="Большевики" stroke="#b91c1c" fillOpacity={1} fill="url(#colorBolsheviks)" />
                <Area type="monotone" dataKey="provisional" name="Временное правительство" stroke="#44403c" fillOpacity={1} fill="url(#colorProvisional)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-500 serif mt-6 leading-relaxed max-w-3xl">
            К октябрю большевики, обещавшие немедленный мир, получили подавляющую поддержку 150-тысячного гарнизона столицы (150 000 солдат), что сделало вооруженное восстание практически бескровным.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CrisisCharts;
