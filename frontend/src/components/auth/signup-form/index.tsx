'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

interface SignUpFormProps {
  containerVariants: Variants;
  itemVariants: Variants;
  onSwitch?: () => void;
}

export function SignUpForm({
  containerVariants,
  itemVariants,
  onSwitch,
}: SignUpFormProps) {
  const [agreed, setAgreed] = useState(false);

  const user = {
    name: '송규원(학부생 -소프트웨어전공)',
    email: 'gyuwon0722@kookmin.ac.kr',
    profileImage: '',
  };

  const handleSubmit = () => {
    if (!agreed) return;
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="flex flex-col items-center gap-6 text-center"
    >
      <motion.h1
        variants={itemVariants}
        className="text-xl font-semibold text-white"
      >
        Confirm Your Account Info
      </motion.h1>

      <motion.div
        variants={itemVariants}
        className="flex w-full items-center gap-3 rounded-lg border bg-white px-4 py-3"
      >
        <div className="bg-border flex h-10 w-10 items-center justify-center rounded-full">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary h-6 w-6"
          >
            <path d="M12 12c2.67 0 8 1.34 8 4v2H4v-2c0-2.66 5.33-4 8-4zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          </svg>
        </div>
        <div className="flex flex-col items-start text-left">
          <div className="text-sm font-medium">{user.name}</div>
          <div className="text-muted-foreground text-xs">{user.email}</div>
        </div>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex w-full items-center gap-2 text-sm"
      >
        <Checkbox
          id="terms"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked === true)}
          className="hover:cursor-pointer"
        />
        <Label htmlFor="terms" className="text-sm leading-tight text-white">
          <span>I accept the </span>
          <a href="/terms" className="text-blue-400 underline" target="_blank">
            Terms of Service
          </a>
          <span> and </span>
          <a
            href="/privacy"
            className="text-blue-400 underline"
            target="_blank"
          >
            Privacy Policy
          </a>
        </Label>
      </motion.div>

      <motion.div
        variants={itemVariants}
        className="flex w-full justify-between gap-2 pt-2"
      >
        <Button variant="link" className="text-white" onClick={onSwitch}>
          <ChevronLeft />
          Cancel
        </Button>
        <Button
          variant="link"
          className="text-white"
          disabled={!agreed}
          onClick={handleSubmit}
        >
          Continue
          <ChevronRight />
        </Button>
      </motion.div>
    </motion.div>
  );
}
