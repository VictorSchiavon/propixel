import { Check } from "lucide-react";

export default function ComparisonTable() {
	return (
		<div className="min-h-screen pt-[5%] text-white">
			<div className="max-w-5xl mx-auto">
				<h1 className="text-2xl font-bold text-center mb-6">Raze vs Concorrentes</h1>

				<div className="grid grid-cols-1 md:grid-cols-[1fr,1.2fr,1fr] gap-0">
					{/* Headers */}
					<div className="hidden md:block" />
					<div className="bg-amber-700 rounded-t-lg p-4">
						<h2 className="text-2xl font-bold text-center">RAZE</h2>
					</div>
					<div className="p-4">
						<h2 className="text-2xl font-bold text-center">CONCORRENTES</h2>
					</div>

					{specifications.map((spec) => (
						<div key={spec.label} className="contents">
							<div className="flex flex-col justify-end items-end">
								<div className="py-2 pr-3">{spec.label}</div>
								<div className="border-b-1 border-dashed border-gray-800 w-52" />
							</div>
							<div className="bg-amber-600 text-center py-2">{spec.gamer}</div>
							<div className="text-center py-2">{spec.intel}</div>
						</div>
					))}

					{features.map((feature, index) => (
						<div key={feature} className="contents">
							<div className="flex flex-col justify-end items-end">
								<div className="text-right py-2 pr-3">{feature}</div>
								<div className="border-b-1 border-dashed border-gray-800 w-52" />
							</div>
							<div
								className={`bg-amber-600 flex justify-center items-center py-2 ${index === features.length - 1 ? "rounded-b-lg" : ""}`}
							>
								<Check className="w-4 h-4" />
							</div>
							<div className="flex justify-center items-center py-2">
								<Check className="w-4 h-4" />
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

const specifications = [
	{
		label: "RAM",
		gamer: "DDR4/DDR5",
		intel: "DDR4/DDR3 2400/1600 Mhz",
	},
	{
		label: "CPU",
		gamer: "AMD Ryzen",
		intel: "XEON/EPYC",
	},
	{
		label: "SSD",
		gamer: "NVMe (6000+ MB)",
		intel: "HD ou SSD",
	},
	{
		label: "Reembolsos",
		gamer: "Nós reembolsamos em até 7 dias.",
		intel: "Enrolação com a devolução do dinheiro.",
	},
	{
		label: "Suporte Humanizado",
		gamer: "Suporte 24 horas por dia.",
		intel: "Suporte meio embaraçoso.",
	},
	{
		label: "Localização",
		gamer: "São Paulo",
		intel: "São Paulo",
	},
];

const features = ["Proteção DDoS"];
