
import { Github, Linkedin } from 'lucide-react'
import Particlebg from '../Particlebg';

type TeamMember = {
  name: string;
  role: string;
  qua: string;
  imageUrl: string;
  profileImage: string; // New field for profile image
  githubUrl?: string;
  linkedinUrl?: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Puskar Roy",
    role: "Pepsudent",
    qua : "Mr techie",
    imageUrl: "https://scontent.frdp4-1.fna.fbcdn.net/v/t39.30808-6/304193974_469757321834141_9002636552499298279_n.png?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=A37yc4awF7gQ7kNvgEV2QXY&_nc_ht=scontent.frdp4-1.fna&_nc_gid=ANXmViCMq3WaySynOH31APR&oh=00_AYCeORRKxXSCmdoNZ_GKpyXW0Hkt1QTFf4Go8xLzEBZeOw&oe=66FEC7C3",
    profileImage: "https://stkabir.co.in/wp-content/uploads/2022/07/Saahir-Dhawan.jpg", // New image to replace description
    githubUrl: "https://github.com/alicej",
    linkedinUrl: "https://linkedin.com/in/alicej",
  },
//   {
//     name: "Bob Smith",
//     role: "CTO",
//     imageUrl: "/placeholder.svg?height=100&width=100",
//     profileImage: "/profile-placeholder.svg?height=200&width=200",
//     githubUrl: "https://github.com/bobs",
//     linkedinUrl: "https://linkedin.com/in/bobs",
//   },
//   {
//     name: "Carol Williams",
//     role: "Head of Design",
//     imageUrl: "/placeholder.svg?height=100&width=100",
//     profileImage: "/profile-placeholder.svg?height=200&width=200",
//     linkedinUrl: "https://linkedin.com/in/carolw",
//   },
//   {
//     name: "David Brown",
//     role: "Lead Developer",
//     imageUrl: "/placeholder.svg?height=100&width=100",
//     profileImage: "/profile-placeholder.svg?height=200&width=200",
//     githubUrl: "https://github.com/davidb",
//     linkedinUrl: "https://linkedin.com/in/davidb",
//   },
]

export default function Component() {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <Particlebg />
    <section className="py-12">
    <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Meet Our Team of Professionals
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative p-6 bg-gray-700 border border-gray-600 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Profile Image */}
              <div className="flex justify-center mb-4">
                <img
                  src={member.profileImage}
                  alt={`${member.name}'s profile`}
                  className="w-32 h-32 rounded-full border-4 border-green-400 shadow-md object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                <p className="text-md text-gray-300 mb-4">{member.role}</p>

                {/* Social Media Buttons */}
                <div className="flex justify-center space-x-4">
                  {member.githubUrl && (
                    <a
                      href={member.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition-colors duration-300"
                      aria-label={`${member.name}'s GitHub`}
                    >
                      <Github className="h-6 w-6" />
                    </a>
                  )}
                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-400 transition-colors duration-300"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  )}
                </div>
              </div>

              {/* Gamer Theme Background Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-purple-500 to-blue-500 opacity-30 blur-lg"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </div>
  )
}
