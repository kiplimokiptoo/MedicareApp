
import React from 'react'
import { Calendar, Phone, Mail, Users, Bed, Activity } from 'lucide-react'

function Home({ userName, onNavigate }) {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main>
        <section className="bg-gradient-to-r from-primary to-accent/30 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">24/7 Trusted Care at Medicare App</h2>
              <p className="mb-6 text-base md:text-lg">Personalized medical care with advanced technology and compassionate staff.</p>
              <div className="flex flex-wrap gap-4">
                <button type="button" onClick={() => onNavigate('appointments')} className="border border-white px-5 md:px-6 py-2.5 md:py-3 rounded-full">Book Appointment</button>
                <button type="button" onClick={() => onNavigate('departments')} className="border border-white px-5 md:px-6 py-2.5 md:py-3 rounded-full">Explore Departments</button>
              </div>
            </div>
            <div>
              <picture>
                <source media="(min-width:1024px)" srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt90HlfGhz_Wtj5BrvYhSClb4detOiZnXSvPzoWTCPrQ&s=10" />
                <source media="(min-width:640px)" srcSet="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt90HlfGhz_Wtj5BrvYhSClb4detOiZnXSvPzoWTCPrQ&s=10" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt90HlfGhz_Wtj5BrvYhSClb4detOiZnXSvPzoWTCPrQ&s=10" alt="hospital" className="rounded-xl shadow-lg w-full object-cover h-56 md:h-80 lg:h-96" />
              </picture>
            </div>
          </div>
        </section>

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3"><Activity className="text-primary" size={20} /></div>
              <h3 className="text-2xl font-bold">24/7</h3>
              <p className="text-sm">Emergency Care</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3"><Users className="text-primary" size={20} /></div>
              <h3 className="text-2xl font-bold">100+</h3>
              <p className="text-sm">Expert Doctors</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-lg text-center">
              <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3"><Bed className="text-primary" size={20} /></div>
              <h3 className="text-2xl font-bold">200+</h3>
              <p className="text-sm">Beds Available</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

