import {EvervaultCard} from "@/components/ui/evervault-card";
import {CodeIcon} from "@radix-ui/react-icons";
import Link from "next/link";

interface Project {
	href: string;
	date: string;
	title: string;
	description: string;
}
export const ProjectItem: React.FC<{project: Project}> = ({project}) => (
	<EvervaultCard>
		<div className='p-8 mx-auto   dark:text-white'>
			<Link href={project.href} target='_blank'>
				<span className='mb-3 flex justify-between text-xs font-semibold tracking-wide uppercase'>
					<span className='text-gray-600 dark:text-gray-200'>— {project.date}</span>
					<div className='flex items-center gap-1'>
						<CodeIcon />
						code
					</div>
				</span>
				<h2 className='inline-block mb-3 text-2xl font-bold leading-7 text-black dark:text-primary transition-colors duration-200 hover:text-deep-purple-accent-400'>
					{project.title}
				</h2>
				<p className=' text-gray-700 line-clamp-6 dark:text-gray-300'>
					{project.description}
				</p>
			</Link>
		</div>
	</EvervaultCard>
);
